# QuranSkool Qaidah Tracker — Vercel landing page

A responsive green-and-gold sales page built around the actual 53-page QuranSkool_Qaidah_Tracker_Final.pdf. Plain HTML, CSS and JavaScript. No npm install or build step required.

## Preview locally
Open index.html in your browser. Keep assets/, styles.css, script.js and config.js alongside it.
Google Fonts is optional and needs internet; system fonts are used if unavailable.

## Connect your sale
Edit config.js:

```js
window.QURAN_TRACKER_CONFIG = {
 checkoutUrl: 'https://your-real-hosted-checkout-link',
 purchaseLabel: 'Get the Qaidah Tracker',
 offerText: 'YOUR ACTUAL PRICE AND CURRENCY',
 purchaseNote: '53-page printable PDF'
};
```

Use your checkout provider's real payment link. Configure product delivery, receipts, refund terms and contact information with that provider. This static page does not process payments or send downloads. Until an HTTPS checkoutUrl is supplied, the final CTA says "View sample pages" and takes visitors to the gallery. No price or sales promise has been fabricated.

The complete PDF is deliberately NOT in this website or ZIP. Upload it privately to your chosen digital-product checkout service; do not place it in this site's public assets directory. Anything inside the deployed folder can be publicly downloaded. The nine WebP images are selected sample pages for marketing, not the whole product.

## Deploy to Vercel
1. Put the contents of this quran-tracker folder into a GitHub repository.
2. Import the repository into Vercel.
3. Select Other as the framework. The included vercel.json sets an empty build command and output directory `.`.
4. If this folder is nested inside your repo, select quran-tracker as the Root Directory.
5. Deploy and check the purchase link on the live URL.

Reference: https://vercel.com/docs/builds/configure-a-build

## Included
- index.html — sales copy, product contents, FAQs and accessible image dialog
- styles.css — responsive layouts, brand palette, typography and reduced-motion support
- script.js — three-category page gallery, enlarged previews, keyboard-compatible native dialog and checkout configuration
- config.js — purchase link and offer
- vercel.json — static hosting configuration
- assets/ — nine actual PDF page renders, compressed as WebP

## Verified product details
Source: QuranSkool_Qaidah_Tracker_Final.pdf (53 pages).
Preview pages: 1, 3, 4, 9, 12, 13, 24, 51, 53.
Includes goals, Arabic letters, Harakat & Tajweed basics, joining letters/word building, pronunciation, reading fluency, mistakes/fixes, Qaidah page progress, weekly practice, lesson reflection, monthly reviews, milestones, a completion check and a certificate.
53 is the total page count, including repeated practice/reflection pages. It is not 53 unique exercises.
The source is not an interactive PDF form. A PDF annotation app is needed for digital handwriting/notes.
The website uses the pages exactly as supplied; their educational text has not been corrected or rewritten.

## Validation
JavaScript syntax, section links, local image references, all nine gallery entries, gallery selection, enlarged-preview controls and checkout URL handling were checked programmatically. A browser rendering engine was unavailable in the build environment; check the page on desktop and mobile before public launch.
