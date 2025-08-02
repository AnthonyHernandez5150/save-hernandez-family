# Save The Hernandez Family Campaign Website

A powerful, responsive website designed to help the Hernandez family raise funds and awareness to prevent foreclosure and bring their family home.

## 🚨 Campaign Overview

The Hernandez family faces an urgent crisis: 9 American children are about to lose their home due to a wrongful immigration decision. This website serves as their digital lifeline to raise funds, share their story, and gather support from the community.

## ✨ Features

- **Responsive Design**: Beautiful on all devices (mobile, tablet, desktop)
- **Real-time Countdown**: Live timer showing time remaining until foreclosure
- **Interactive Timeline**: Visual story of their legal battle
- **Evidence Gallery**: Placeholder cards for legal documents and photos
- **Donation Integration**: Direct links to GoFundMe campaign
- **Smooth Animations**: Professional hover effects and transitions
- **Social Sharing**: Built-in social media sharing capabilities

## 🎨 Design Philosophy

- **Color Psychology**: Emergency red (#e63946) creates urgency, trust blue (#1d3557) builds credibility
- **Typography**: Elegant Playfair Display for headlines, readable Roboto for body text
- **Mobile-First**: Optimized for mobile viewing with progressive enhancement
- **Accessibility**: High contrast ratios and semantic HTML structure

## 📁 Project Structure

```
Save2/
├── index.html              # Main landing page (all-in-one version)
├── assets/
│   ├── css/
│   │   └── style.css      # Extracted stylesheet
│   ├── js/
│   │   └── main.js        # Interactive functionality
│   └── images/            # Family photos and documents (add your files here)
├── legal/                 # PDF documents and legal papers
├── .github/
│   └── copilot-instructions.md
└── README.md              # This file
```

## 🚀 Quick Start

### Option 1: Use the All-in-One Version
The `index.html` file contains everything needed to run the site immediately:

1. Double-click `index.html` to open in your browser
2. The site is fully functional with embedded CSS and JavaScript

### Option 2: Use Modular Version (Recommended for Development)
For easier maintenance and customization:

1. Link the external CSS and JS files in your HTML
2. Customize styles in `assets/css/style.css`
3. Add functionality in `assets/js/main.js`

## 📝 Content Customization

### 1. Replace Placeholder Content

**Immediate Priority:**
- [ ] Replace `[PHOTO: Family in Colorado]` with actual family photo
- [ ] Replace `[DOCUMENT: Visa Denial Letter]` with document image
- [ ] Replace `[PHOTO: Current Living Conditions]` with current situation photo
- [ ] Update countdown deadline date (currently set to August 15, 2025)

**Evidence Section:**
- [ ] Replace `[ER RECORDS]` with hospital records image
- [ ] Replace `[THERAPY NOTES]` with therapy documentation
- [ ] Replace `[SCHOOL RECORDS]` with children's school reports

### 2. Update Countdown Timer

In `assets/js/main.js`, change the deadline date:
```javascript
const deadline = new Date("2025-08-15"); // Update this date
```

### 3. Customize Donation Links

Replace the GoFundMe link throughout the site:
```html
https://gofund.me/5-dollars-to-stop-foreclosure
```

## 🌐 Deployment Options

### Netlify (Recommended)
1. Create a GitHub repository with your files
2. Connect to [Netlify](https://netlify.com)
3. Deploy automatically from your repo

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `username.github.io/repository-name`

### Other Options
- Vercel
- Firebase Hosting
- Traditional web hosting

## 🛠️ Development

### Local Setup
1. Open the project folder in VS Code
2. Install the Live Server extension
3. Right-click `index.html` → "Open with Live Server"

### Making Changes
- **Styles**: Edit `assets/css/style.css`
- **Functionality**: Edit `assets/js/main.js`
- **Content**: Edit `index.html`

## 📱 Mobile Optimization

The site is fully responsive with special mobile considerations:
- Simplified navigation
- Touch-friendly buttons
- Optimized image sizes
- Sticky donation bar for constant visibility

## 🔒 Privacy & Security

- No personal data collection
- External links open in new tabs
- Placeholder content for sensitive documents
- Ready for password protection if needed

## 📊 Analytics Integration

The JavaScript includes hooks for Google Analytics:
```javascript
// Add your tracking ID
gtag('config', 'GA_TRACKING_ID');
```

## 🆘 Support

For technical issues or customization help:
1. Check the browser console for errors
2. Ensure all file paths are correct
3. Test on multiple devices and browsers

## 📋 Content Checklist

- [ ] Family story written and added
- [ ] All photos uploaded and linked
- [ ] Legal documents prepared (redacted versions)
- [ ] Countdown deadline confirmed
- [ ] GoFundMe link updated
- [ ] Contact information added
- [ ] Social media links configured
- [ ] Domain name registered
- [ ] Site tested on mobile devices

## 🏆 Best Practices

1. **Update Regularly**: Keep the timeline and story current
2. **Test Everything**: Verify all links work
3. **Optimize Images**: Compress photos for faster loading
4. **Monitor Performance**: Check site speed regularly
5. **Backup Content**: Keep copies of all content

---

**Time is critical. Every day counts. Let's bring this family home. 🏠💙**
