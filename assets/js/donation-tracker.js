// Unified Donation Tracker System
let donations = {
  paypal: 150,   // Initial PayPal donations
  cashapp: 0,    // Cash App starts at 0
  gofundme: 0    // GoFundMe starts at 0
};

const GOAL_AMOUNT = 20000;

// Update all tracker elements for unified progress bar
function updateDonationTracker() {
  const total = donations.paypal + donations.cashapp + donations.gofundme;
  const percentage = Math.max(0.75, (total / GOAL_AMOUNT) * 100); // Minimum 0.75% for visibility
  
  // Update unified progress tracker elements
  const raisedElement = document.getElementById('main-raised');
  const percentElement = document.getElementById('main-percent');
  const progressFill = document.getElementById('main-progress-fill');
  
  // Update breakdown amounts
  const paypalElement = document.getElementById('main-paypal-amount');
  const cashappElement = document.getElementById('main-cashapp-amount');
  const gofundmeElement = document.getElementById('main-gofundme-amount');
  
  if (raisedElement) raisedElement.textContent = `$${total.toLocaleString()}`;
  if (percentElement) percentElement.textContent = `${(total / GOAL_AMOUNT * 100).toFixed(2)}% funded`;
  if (progressFill) progressFill.style.width = `${percentage}%`;
  
  if (paypalElement) paypalElement.textContent = `$${donations.paypal.toLocaleString()}`;
  if (cashappElement) cashappElement.textContent = `$${donations.cashapp.toLocaleString()}`;
  if (gofundmeElement) gofundmeElement.textContent = `$${donations.gofundme.toLocaleString()}`;
  
  // Update urgency deadline text
  updateDeadlineUrgency(total);
}

// Update deadline message based on current progress
function updateDeadlineUrgency(total) {
  const deadlineElement = document.getElementById('main-deadline');
  if (!deadlineElement) return;
  
  const remaining = GOAL_AMOUNT - total;
  
  if (total >= 5000) {
    deadlineElement.textContent = "FORECLOSURE STOPPED!";
    deadlineElement.style.color = "#4CAF50";
  } else if (remaining <= 1000) {
    deadlineElement.textContent = `Only $${remaining.toLocaleString()} left to reach safety!`;
  } else {
    const urgentAmount = Math.min(5000, remaining);
    deadlineElement.textContent = `$${urgentAmount.toLocaleString()} needed by Aug 15`;
  }
}

// Manual update function (call this when you get donations)
function addDonation(source, amount) {
  if(donations.hasOwnProperty(source)) {
    donations[source] += amount;
    updateDonationTracker();
    
    // Show success feedback
    showDonationFeedback(amount, source);
    
    console.log(`Added $${amount} to ${source}. New ${source} total: $${donations[source]}`);
    console.log(`Overall total: $${donations.paypal + donations.cashapp + donations.gofundme}`);
  } else {
    console.error(`Invalid donation source: ${source}. Use: paypal, cashapp, or gofundme`);
  }
}

// Show visual feedback when donation is added
function showDonationFeedback(amount, source) {
  // Create temporary success message
  const feedback = document.createElement('div');
  feedback.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #e63946, #f77f00);
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-weight: bold;
    z-index: 10000;
    box-shadow: 0 8px 25px rgba(230, 57, 70, 0.4);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    border: 2px solid rgba(255, 255, 255, 0.2);
  `;
  feedback.innerHTML = `
    <div style="font-size: 1.1rem;">🎉 +$${amount} donation!</div>
    <div style="font-size: 0.85rem; opacity: 0.9; margin-top: 0.25rem;">
      via ${source.charAt(0).toUpperCase() + source.slice(1)}
    </div>
  `;
  
  document.body.appendChild(feedback);
  
  // Animate in
  setTimeout(() => {
    feedback.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 4 seconds
  setTimeout(() => {
    feedback.style.transform = 'translateX(100%)';
    setTimeout(() => feedback.remove(), 300);
  }, 4000);
}

// Quick donation helper functions
function addPayPalDonation(amount) {
  addDonation('paypal', amount);
}

function addCashAppDonation(amount) {
  addDonation('cashapp', amount);
}

function addGoFundMeDonation(amount) {
  addDonation('gofundme', amount);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  updateDonationTracker();
  
  // Make functions globally accessible
  window.addDonation = addDonation;
  window.addPayPalDonation = addPayPalDonation;
  window.addCashAppDonation = addCashAppDonation;
  window.addGoFundMeDonation = addGoFundMeDonation;
  window.updateDonationTracker = updateDonationTracker;
  
  console.log('🎯 Unified Donation Tracker Loaded!');
  console.log('📝 Usage Examples:');
  console.log('   addDonation("paypal", 25)     - Add $25 PayPal donation');
  console.log('   addDonation("cashapp", 50)    - Add $50 Cash App donation');
  console.log('   addDonation("gofundme", 100)  - Add $100 GoFundMe donation');
  console.log('🔧 Quick helpers: addPayPalDonation(25), addCashAppDonation(50), addGoFundMeDonation(100)');
});
