require('colors');
const fse = require('fs-extra');
const path = require('path');
const { reminders } = require('./.reminders');

const [, , ...args] = process.argv;
const alreadyInList = (reminder, ...reminderList) => reminderList.indexOf(reminder) !== -1;
const updateReminders = (reminder, ...remindersList) => {
  remindersList.push(reminder);
  return {
    'reminders': remindersList
  };
};
if (args.length < 1) console.log('No reminder is supplied'.red), process.exit(0);
if (alreadyInList(args[0], ...reminders)) console.log('Reminder is already in the list, exiting'), process.exit(0);
const updatedReminders = updateReminders(args[0], ...reminders);

fse.writeFileSync(path.join(__dirname, './.reminders.json'), JSON.stringify(updatedReminders, null, 4));
