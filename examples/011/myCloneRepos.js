require('colors');
const readLine = require('readline-sync');
const path = require('path');
const fse = require('fs-extra');
const shell = require('shelljs');
const { repos } = require('./config');

const isEmptyString = name => name.trim() === '';
const exitProcess = code => message => (console.log(`${message}`.red), process.exit(code));
const exitProcessWithZeroStatus = exitProcess(0);
const getTargetLocation = () => {
  const repoName = readLine.question('Enter the repository name where repositories to be cloned: '.bold.white);
  return isEmptyString(repoName) ? (console.log('Repository name can not be empty.'.red), getTargetLocation()) : path.join(__dirname, repoName);
};
const createDirectory = (name) => {
  if (isEmptyString(name)) exitProcessWithZeroStatus('Directory name can not be empty');
  if (fse.pathExistsSync(name)) {
    console.log(`Directory:${name} is already present`.yellow);
    return name;
  }
  fse.mkdirSync(name);
  console.log(`Repos location: ${name} is created successfully`.green);
  return name;
};
const isRepoAlreadyAvailable = repoPath => fse.pathExistsSync(repoPath);
const createRepo = repoPath =>
  (isRepoAlreadyAvailable(repoPath) ?
    (console.log(`Repository: ${repoPath} is already available`.yellow), repoPath) :
    createDirectory(repoPath));
const cloneRepositories = repositories => (targetLocation) => {
  if (repositories.length < 1) exitProcessWithZeroStatus('No repositories found for clone');
  shell.cd(targetLocation);
  repositories.forEach((repo) => {
    console.log(`Cloning the repo: ${repo}`.blue);
    shell.exec(`git clone ${repo} --progress -b master`);
  });
  console.log(`${repositories} are cloned successfully to ${targetLocation}`.green);
  return repositories;
};
const cloneRepositoriesTo = cloneRepositories(repos);

console.log(`Repositories to be cloned are: ${repos}`.blue);
const targetLocation = getTargetLocation();
console.log(`Repositories will be cloned to: ${targetLocation}`.blue);
createRepo(targetLocation);
cloneRepositoriesTo(targetLocation);
