const fs = require('node:fs');
const crypto = require('node:crypto');
let html = fs.readFileSync('index.html', 'utf8');
for (const file of ['styles.css', 'beach-theme.css', 'app.bundle.js']) {
  const version = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0, 12);
  html = html.replace(new RegExp(file.replaceAll('.', '\\.') + '(?:\\?v=[a-f0-9]+)?', 'g'), file + '?v=' + version);
}
fs.writeFileSync('index.html', html);
