const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const firebaseConfig = fs.readFileSync(path.join(root, 'firebase-config.js'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));

assert(index.includes('<html lang="ar" dir="rtl"'), 'page must declare Arabic RTL metadata');
assert(index.includes('https://abdulelahothmangwaith.github.io/my-website-project/'), 'canonical URL must match the public GitHub Pages path');
assert(index.includes('https://github.com/AbdulElahOthmanGwaith/my-website-project'), 'repository link must point to the verified GitHub repository');
assert(!index.includes('gitlab.com/AbdulElahOthmanh'), 'stale GitLab identity link must not remain');
assert(!index.includes('google-site-verification'), 'unverified Search Console token must not be published');
assert(index.includes('fab fa-github'), 'repository link must use the GitHub icon');
assert(index.includes('window.firebaseFirestore'), 'Firestore helpers must be exposed for optional cloud sync');
assert(firebaseConfig.includes('firebaseReady'), 'Firebase config must expose readiness state');
assert(firebaseConfig.includes('!value.includes(\'YOUR_\')'), 'placeholder Firebase config must not be initialized');
assert(fs.existsSync(path.join(root, 'styles.css')), 'stylesheet must exist');
assert(fs.existsSync(path.join(root, 'script.js')), 'application script must exist');
assert(fs.existsSync(path.join(root, 'manifest.json')), 'PWA manifest must exist');
assert(typeof manifest.name === 'string' && manifest.name.length > 0, 'manifest must define a name');
assert(typeof manifest.start_url === 'string' && manifest.start_url.length > 0, 'manifest must define a start URL');

console.log('ConnectHub static smoke tests passed');
