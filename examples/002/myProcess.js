process.stdout.write('Hello I am writing to standard output\n');
process.stdout.write(`Current working directory is ${process.cwd()}\n`);
process.stdout.write(`This script is up & running for ${process.uptime()} seconds\n`);
process.on('exit', code => console.log(`process with PID:${process.pid} is finished now with code ${code}`));
