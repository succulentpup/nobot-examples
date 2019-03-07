const QS = require('querystring');

// https://jira.my-company.com/rest/api/latest/search?jql="assignee=shaun.stone&startAt=2&maxResults=2"
const apiHost = 'https://jira.my-company.com/rest/api/latest/search?jql=';
const jqlParams = {
  asignee: 'Ganesh',
  startAt: 2,
  maxResults: 2
};
const apiURI = `${apiHost}"${QS.stringify(jqlParams)}"`;
console.log('apiURI: ',apiURI);
