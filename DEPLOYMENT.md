# Deployment Guide

Quick instructions for getting your Save The Hernandez Family campaign website online.

## 🚀 Quick Deployment (Recommended)

### Option 1: Netlify (Free, Easiest)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial campaign website"
   git remote add origin https://github.com/yourusername/save-hernandez-family.git
   git push -u origin main
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Deploy settings:
     - Build command: (leave empty)
     - Publish directory: `.` (root)
   - Click "Deploy site"

3. **Custom Domain (Optional)**
   - In Netlify dashboard: Site settings → Domain management
   - Add custom domain like `savehernandezfamily.com`
   - Follow DNS configuration instructions

### Option 2: GitHub Pages (Free)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial campaign website"
   git remote add origin https://github.com/yourusername/save-hernandez-family.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save

3. **Access Your Site**
   - URL: `https://yourusername.github.io/save-hernandez-family`

## 🛠️ Before Going Live

### 1. Content Updates (CRITICAL)
- [ ] Replace all `[PHOTO: ...]` placeholders with real images
- [ ] Update countdown deadline date in `assets/js/main.js`
- [ ] Replace GoFundMe link: `https://gofund.me/5-dollars-to-stop-foreclosure`
- [ ] Add real family photos to `assets/images/`
- [ ] Upload legal documents to `legal/` folder

### 2. SEO & Social Media
- [ ] Update meta tags in HTML head section
- [ ] Add Google Analytics tracking ID
- [ ] Create social media images (1200x630px for Facebook/Twitter)
- [ ] Test social media previews

### 3. Legal & Privacy
- [ ] Review all content with legal counsel
- [ ] Ensure all personal information is redacted
- [ ] Add privacy policy if collecting emails
- [ ] Consider password protection for sensitive documents

## 📱 Testing Checklist

- [ ] Test on mobile devices (iPhone, Android)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify all links work
- [ ] Check countdown timer functionality
- [ ] Test donation button clicks
- [ ] Verify social sharing buttons
- [ ] Test page loading speed

## 🔧 Advanced Options

### Custom Domain Setup
1. Buy domain from registrar (GoDaddy, Namecheap, etc.)
2. Point domain to your hosting provider
3. Configure SSL certificate (usually automatic)

### Email Collection
Add Netlify forms for collecting supporter emails:
```html
<form name="supporters" method="POST" data-netlify="true">
  <input type="email" name="email" placeholder="Your email" required>
  <button type="submit">Stay Updated</button>
</form>
```

### Performance Optimization
- Compress images using TinyPNG or similar
- Enable Gzip compression (automatic on Netlify)
- Add CDN for faster global loading

## 📊 Analytics Setup

### Google Analytics
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID (GA-XXXXXXXXX-X)
3. Replace `GA_TRACKING_ID` in HTML files

### Facebook Pixel (Optional)
Add to track donation conversions:
```html
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## 🆘 Emergency Launch (If Time is Critical)

If you need to go live immediately:

1. **Use the all-in-one `index.html`** - it works without external files
2. **Upload to any free hosting**:
   - [Netlify Drop](https://app.netlify.com/drop) - drag and drop files
   - [Surge.sh](https://surge.sh) - command line deployment
   - [GitHub Pages](https://pages.github.com) - if you have GitHub account

3. **Minimum viable updates**:
   - Change countdown date
   - Update GoFundMe link
   - Add at least one family photo

## 📞 Support Resources

- **Netlify Support**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)
- **Domain Registration**: [namecheap.com](https://namecheap.com), [godaddy.com](https://godaddy.com)
- **Free Images**: [unsplash.com](https://unsplash.com), [pexels.com](https://pexels.com)

---

**Remember: Every hour counts. Get the site live first, then improve it. Your family's story is powerful – let the world hear it. 💙**
