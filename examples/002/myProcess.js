process.stdout.write('Type something and hit enter\n');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null && chunk !== undefined) {
    process.stdout.write(`Following is the string input by user:
    ${chunk}
    `);
    process.exit(0);
  }
});
process.on('exit', code => console.log(`process with PID:${process.pid} is finished now with code ${code}`));
