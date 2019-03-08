const URI = require('url');

process.stdout.write('Enter the url\n');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk === undefined) {
    console.log(`invalid input
        Hint: Enter a valid url, eg: https://www.google.co.uk/search?q=stranger+things`);
    process.exit(0);
  }
  const {protocol, slashes, auth, host, port, hostname, query, href} = URI.parse(chunk);
  console.log(`protocol: ${protocol},
    slashes: ${slashes}
    auth: ${auth}
    host: ${host}
    port: ${port}
    hostname: ${hostname}
    query: ${query}
    href: ${href}`);
});
