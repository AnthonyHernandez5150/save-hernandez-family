# Images Directory

This folder should contain all the visual assets for the campaign website.

## Required Images (Replace placeholders in index.html):

### Hero Section
- `family-colorado.jpg` - Family photo from Colorado (replace [PHOTO: Family in Colorado])
- `hero-background.jpg` - Optional: Custom hero background image

### Story Section
- `family-before.jpg` - Family life before the crisis
- `visa-denial-letter.jpg` - Redacted visa denial document
- `current-conditions.jpg` - Current living situation

### Evidence Section
- `er-records.jpg` - Redacted hospital records from 1998
- `therapy-notes.jpg` - Redacted therapy documentation
- `school-records.jpg` - Redacted school counselor reports

### Additional Assets
- `timeline-photos/` - Photos for each timeline milestone
- `legal-documents/` - Redacted legal paperwork
- `family-portraits/` - Various family photos for testimonials

## Image Guidelines

- **Format**: Use WebP for better compression, with JPG/PNG fallbacks
- **Size**: Optimize for web (under 500KB per image)
- **Dimensions**: 
  - Hero images: 1920x1080px
  - Evidence cards: 600x400px
  - Timeline photos: 400x300px
- **Privacy**: Ensure all personal information is redacted
- **Quality**: High enough resolution for retina displays

## File Naming Convention

Use descriptive, lowercase names with hyphens:
- `family-colorado-before.jpg`
- `visa-denial-redacted.jpg`
- `er-records-1998-redacted.jpg`

## To Add Images:

1. Copy image files to this directory
2. Update the corresponding HTML img tags in index.html
3. Replace placeholder divs with actual img elements
4. Add appropriate alt text for accessibility

Example replacement:
```html
<!-- Replace this: -->
<div class="evidence-img">[PHOTO: Family in Colorado]</div>

<!-- With this: -->
<img src="assets/images/family-colorado.jpg" alt="The Hernandez family in Colorado before the crisis" class="evidence-img">
```
