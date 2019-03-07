const [, , ...args] = process.argv;

if (args.length === 0) {
  console.error(`Invalid usage. 
Hint: node myHello.js <yourName>`);
  process.exit(0);
} else {
  console.log(`Hi ${args[0]}, how are you doing`);
}
