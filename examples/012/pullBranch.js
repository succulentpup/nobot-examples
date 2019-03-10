require('colors');
const shell = require('shelljs');
const readLine = require('readline-sync');
const { repository } = require('./myConfig');

const { name, branch } = repository;
const getRepoName = () => name.substring(name.lastIndexOf('/') + 1);
const getBranchName = () => branch;

// work flow starts here
shell.cd(getRepoName());
shell.exec(`git checkout ${getBranchName()}`);
shell.exec(`git pull ${name}`);
const ticketId = readLine.question('Enter the ticketId, it will be named as branch', {
  limit: input => input.trim().length > 0,
  limitMessage: 'Enter a valid ticketId'
});
shell.exec(`git checkout -b ${ticketId}`);
