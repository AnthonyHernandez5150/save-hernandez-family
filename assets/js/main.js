// ===== COUNTDOWN TIMER =====
function updateCountdown() {
    const deadline = new Date("2025-10-01");
    const now = new Date();
    const diff = deadline - now;
    
    if (diff <= 0) {
        document.getElementById("countdown").textContent = "TIME'S UP!";
        document.getElementById("mobile-countdown").textContent = "TIME'S UP!";
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").textContent = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
    document.getElementById("mobile-countdown").textContent = `${days} days left`;
}

// ===== CAMPAIGN PROGRESS UPDATER =====
async function updateCampaignProgress() {
    try {
        // Attempt to fetch real GoFundMe data
        const response = await fetch('https://gateway.gofundme.com/web-gateway/v1/feed/5-dollars-to-stop-foreclosure');
        const data = await response.json();
        const campaign = data.references.campaigns[Object.keys(data.references.campaigns)[0]];
        
        // Extract real numbers from GoFundMe API
        const raised = campaign.current_amount || 0;
        const goal = campaign.goal_amount || 20000;
        const donors = campaign.donor_count || 0;
        const percent = goal > 0 ? Math.round((raised / goal) * 100) : 0;

        // Update DOM with ACTUAL values
        document.querySelector('.raised').textContent = `$${raised.toLocaleString()}`;
        document.querySelector('.percent').textContent = `${percent}% funded`;
        document.querySelector('.donors').textContent = `${donors} donation${donors !== 1 ? 's' : ''}`;
        document.querySelector('.progress-fill').style.width = `${percent}%`;
        document.querySelector('.updated').textContent = `Updated ${new Date().toLocaleTimeString()}`;

        console.log(`Campaign Progress: $${raised} of $${goal} (${percent}%) from ${donors} donors`);

    } catch (error) {
        console.log("GoFundMe API unavailable, maintaining zero state:", error.message);
        
        // Fallback that maintains honest ZERO state
        document.querySelector('.raised').textContent = "$0";
        document.querySelector('.percent').textContent = "0% funded";
        document.querySelector('.donors').textContent = "0 donations";
        document.querySelector('.progress-fill').style.width = "0%";
        document.querySelector('.updated').textContent = "Campaign just started";
    }
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

//===== DONATION BAR VISIBILITY =====
function handleDonationBarVisibility() {
    const donationBar = document.querySelector('.donation-bar');
    const donateSection = document.querySelector('#donate');
    
    if (!donationBar || !donateSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                donationBar.style.display = 'none';
            } else {
                donationBar.style.display = 'flex';
            }
        });
    }, {
        threshold: 0.1
    });
    
    observer.observe(donateSection);
}

// ===== TIMELINE ANIMATIONS =====
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const triggerPoint = window.innerHeight * 0.85;

    function checkVisibility() {
        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerPoint && !item.classList.contains('visible')) {
                // Add staggered delay for smoother animation
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 200);
            }
        });
    }

    // Initial check
    checkVisibility();

    // Check on scroll with throttling for better performance
    let ticking = false;
    function throttledCheck() {
        if (!ticking) {
            requestAnimationFrame(() => {
                checkVisibility();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', throttledCheck);
}

// ===== YEARS IN BATTLE COUNTER =====
function addYearsCounter() {
    const timelineSection = document.querySelector('#timeline .container');
    const startYear = 2010;
    const currentYear = new Date().getFullYear();
    const yearsInBattle = currentYear - startYear;
    
    const counterHTML = `
        <div class="years-counter" style="text-align: center; margin-bottom: 2rem;">
            <div style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; border-radius: 50px; font-size: 1.2rem; font-weight: 500;">
                <strong>${yearsInBattle} Years</strong> of fighting to stay together
            </div>
        </div>
    `;
    
    const caption = timelineSection.querySelector('.timeline-caption');
    if (caption) {
        caption.insertAdjacentHTML('afterend', counterHTML);
    }
}

// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Initialize campaign progress
    updateCampaignProgress();
    // Update campaign progress every 5 minutes
    setInterval(updateCampaignProgress, 5 * 60 * 1000);
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Handle donation bar visibility
    handleDonationBarVisibility();
    
    // Initialize timeline animations
    animateTimeline();
    
    // Add years counter to timeline
    addYearsCounter();
    
    // Initialize language system
    const savedLang = localStorage.getItem('language') || 'en';
    updateLanguageIndicator(savedLang);
    
    // Add loading animation completion
    document.body.classList.add('loaded');
    
    // Log initialization for debugging
    console.log('Save Hernandez Family website initialized successfully');
    console.log('Language system initialized with:', savedLang);
});

// ===== UTILITY FUNCTIONS =====
function shareOnSocialMedia(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Help save the Hernandez family from foreclosure!");
    
    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };
    
    if (urls[platform]) {
        window.open(urls[platform], '_blank', 'width=600,height=400');
    }
}

// ===== ANALYTICS TRACKING =====
function trackDonationClick(source) {
    // Add your analytics tracking code here
    console.log(`Donation clicked from: ${source}`);
    
    // Example for Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'donation_click', {
            'event_category': 'engagement',
            'event_label': source
        });
    }
}

// ===== LANGUAGE SWITCHING SYSTEM =====
function switchLanguage(lang) {
    localStorage.setItem('language', lang);
    updateLanguageIndicator(lang);
    
    // Here you would typically update all text content
    // For now, we'll just update the indicator and log the change
    console.log(`Language switched to: ${lang.toUpperCase()}`);
    
    // Update the sticky bar language indicator
    updateLanguageIndicator(lang);
    
    // In a full implementation, you would update all translatable content here
    // Example: updatePageContent(lang);
}

function updateLanguageIndicator(lang) {
    const indicator = document.getElementById("current-lang");
    if (indicator) {
        indicator.textContent = lang.toUpperCase();
        console.log('Language indicator updated to:', lang.toUpperCase());
    } else {
        console.error('Language indicator element not found!');
    }
}

// ===== ENHANCED LANGUAGE TOGGLE =====
function toggleLanguage() {
    const currentLang = localStorage.getItem("language") || "en";
    const newLang = currentLang === "en" ? "es" : "en";
    console.log('Toggling from', currentLang, 'to', newLang);
    switchLanguage(newLang);
}
