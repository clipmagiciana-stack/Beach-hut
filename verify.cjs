const fs = require('node:fs');
const QR = require('qrcode');
const html = fs.readFileSync('index.html', 'utf8');
const app = fs.readFileSync('app.js', 'utf8');
for (const file of ['styles.css', 'app.bundle.js', 'landing-reference.png', ...Array.from(app.matchAll(/image:'([^']+)'/g), match => match[1])]) {
  if (!fs.existsSync(file)) throw new Error('Missing asset: ' + file);
}
for (const match of html.matchAll(/href="#([^"]+)"/g)) {
  if (!html.includes('id="' + match[1] + '"')) throw new Error('Broken anchor: ' + match[1]);
}
if (QR.create('https://example.com/#menu').modules.size < 21) throw new Error('Invalid QR');
console.log('Verified all image paths, built assets, navigation anchors, and QR generation.');
