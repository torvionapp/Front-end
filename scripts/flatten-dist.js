const fs = require('fs');
const path = require('path');

const rootDist = path.resolve(__dirname, '..', 'dist');
const clientDist = path.join(rootDist, 'client');
const serverDist = path.join(rootDist, 'server');

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function cleanupDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  fs.rmSync(dirPath, { recursive: true, force: true });
}

if (!fs.existsSync(clientDist)) {
  console.error('Expected build output in dist/client, but it was not found.');
  process.exit(1);
}

for (const entry of fs.readdirSync(clientDist)) {
  const src = path.join(clientDist, entry);
  const dest = path.join(rootDist, entry);
  if (fs.existsSync(dest)) {
    cleanupDirectory(dest);
  }
  copyRecursive(src, dest);
}

const assetsDir = path.join(rootDist, 'assets');
if (!fs.existsSync(assetsDir)) {
  console.error('Expected assets directory in dist after flattening.');
  process.exit(1);
}

const assetFiles = fs.readdirSync(assetsDir);
const jsFile = assetFiles.find((file) => /^index-.*\.js$/.test(file));
const cssFile = assetFiles.find((file) => /^styles-.*\.css$/.test(file));

if (!jsFile) {
  console.error('Could not find client entry JS file in dist/assets.');
  process.exit(1);
}

const htmlPath = path.join(rootDist, 'index.html');
if (!fs.existsSync(htmlPath)) {
  fs.writeFileSync(
    htmlPath,
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Torvion – AI Productivity Suite</title>
    <link rel="icon" href="/favicon.ico" />
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ''}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${jsFile}"></script>
  </body>
</html>
`,
    'utf8',
  );
}

cleanupDirectory(clientDist);
cleanupDirectory(serverDist);

console.log('Flattened build output into dist with assets and index.html.');
