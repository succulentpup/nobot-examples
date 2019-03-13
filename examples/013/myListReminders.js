require('colors');
const fse = require('fs-extra');
const readlineSync = require('readline-sync');
const path = require('path');
const { reminders } = require('./.reminders.json');

console.log(`reminders: ${reminders}`);
const index = readlineSync.keyInSelect(reminders, 'What reminder is addressed');
if (index === -1) {
  console.log('No reminder found'.red);
  process.exit(0);
}
console.log(`${reminders[index]} is removed from reminders list`.red);
const removeFromArrayAtIndex = (arr, ind) => arr.filter((_, i) => i !== ind);
const updatedReminders = { "reminders": removeFromArrayAtIndex(reminders, index) };
console.log(`updatedReminders: ${updatedReminders}`.yellow);
fse.writeFileSync(path.join(__dirname, './.reminders.json'), JSON.stringify(updatedReminders, null, 4));
