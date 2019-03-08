const querystring = require('querystring');

const url = 'http://www.opencanvas.co.uk?myName=Shaun&myAge=28&comment=Yes+I+am+getting+old';
const parsedURI = querystring.parse(url.substring(url.indexOf('?') + 1));
console.log(`myName is ${parsedURI.myName}`);
console.log(`myAge is ${parsedURI.myAge}`);
console.log(`comment is ${parsedURI.comment}`);

