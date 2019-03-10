require('colors');
const readLine = require('readline-sync');
const path = require('path');
const fse = require('fs-extra');
const shell = require('shelljs');
const { repository } = require('./myConfig');

const getRepoName = () => repository.name;
const getRepoLocationFromUser = () => readLine.question(
  'Enter relative path to clone the repository: ',
  {
    limit: input => input.trim().length > 0,
    limitMessage: 'Repository path can not be empty, please enter valid path'
  }
);
const pathExists = repoPath => fse.pathExistsSync(repoPath);
const getAbsoluteRepoPath = repoName => path.join(__dirname, repoName);

// work flow starts here
const repoLocation = getRepoLocationFromUser();
console.log(`Path to clone ${getRepoName()} is ${getAbsoluteRepoPath(repoLocation)}`.blue);
if (pathExists(getAbsoluteRepoPath(repoLocation))) {
  const overWriteChoice = readLine.question(
    `${getAbsoluteRepoPath(repoLocation)} is already available, Do you want to overwrite it(Y/N): `,
    {
      limit: input => input.trim().length > 0,
      limitMessage: 'You choice should be either Y or N'
    }
  );
  if (overWriteChoice.toLowerCase() === 'y') {
    shell.rm('-rf', getAbsoluteRepoPath(repoLocation));
  } else {
    console.log(`${getAbsoluteRepoPath(repoLocation)} is already available, exiting`.red);
    process.exit(0);
  }
}
shell.mkdir('-p', getAbsoluteRepoPath(repoLocation));
shell.cd(getAbsoluteRepoPath(repoLocation));
shell.exec(`git clone ${getRepoName()} --progress`);

