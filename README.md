# Dewata Labs — Modular Source

## Structure
- `index.html`: deploy-ready standalone website shell; all page views remain embedded for reliable routing.
- `css/styles.css`: extracted stylesheet.
- `js/main.js`: extracted application router, contact form behavior, and project wizard logic.
- `pages/`: individual HTML page-view source fragments for future refactoring.
- `layouts/`: header and footer source fragments.
- `assets/`: reserved for images, icons, and other static assets.

## Preview / Deploy
Upload the complete folder contents to a static host such as GitHub Pages, Netlify, or Vercel.
Open `index.html` locally for a preview. Google Fonts are loaded from the internet.

## Important
The contact form and project inquiry currently simulate successful submission in the browser. They are not connected to a real backend or email service yet.
