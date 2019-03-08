const OS = require('os');

console.log(`home directory path is : ${OS.homedir()}`);
console.log(`platform that hosts this file is: ${OS.platform()}`);
console.log(`hostname of this computer: ${OS.hostname()}`);
console.log(`OS release is: ${OS.release()}`);

const coreCPUs = OS.cpus();
const cpuCount = coreCPUs.length;
const model = coreCPUs[0].model;

console.log(`cpuCount is: ${cpuCount}`);
console.log(`model of the CPU is: ${model}`);
