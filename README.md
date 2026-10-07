# Beach Hut

Responsive restaurant landing page using all four supplied dish photographs and the supplied landing graphic (copied to `landing-reference.png` for browser compatibility).

Run `npm install`, `npm run build`, then `npm start`. Open http://localhost:3000.

Deploy `index.html`, `styles.css`, `beach-theme.css`, `app.bundle.js`, `landing-reference.png`, and the four dish PNGs together to any static host. The QR is generated locally in the browser and always points to the current site's `#menu` URL. A public deployment is required for guests to scan it from another device. Rebuild after changing `app.js`.

Features: Lagon-inspired menu cards, beach palette, six languages (English, French, Hindi, Spanish, German, Chinese), persistent theme and language choices, search, category and dietary filters, dish photo dialogs, QR menu, quantity controls, local saved selections, cooking requests, and a waiter-facing summary. Responsive layouts and reduced-motion support are included. Fonts fall back to local serif/sans-serif when Google Fonts is unavailable.

Prices, hours, booking details, and exact map location were not supplied. Confirm the map search result and add verified business details before publishing. The order summary is for showing to a waiter; no ordering backend or payment service is connected. Supplied photos are 2D; no 3D or AR dish models are available. All four dishes are priced at Rs 750.00.
