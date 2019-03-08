const { platform } = require('os');
const { exec } = require('child_process');

const [, , url] = process.argv;
if (url === undefined) {
  console.log(`Invalid usage
    Hint: node myOpen.js http://www.google.co.in`);
  process.exit(0);
}

const myPlatform = platform();
console.log(`myPlatform is: ${myPlatform}`);

const WINDOWS_PLATFORM = 'win32';
const MAC_PLATFORM = 'darwin';

let browser;
if (myPlatform === WINDOWS_PLATFORM) {
  browser = `start microsoft-edge:${url}`;
} else if (myPlatform === MAC_PLATFORM) {
  browser = `open -a "Google Chrome" ${url}`;
} else {
  browser = `firefox ${url}`;
}
exec(browser);
