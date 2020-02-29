let CronJob = require('cron').CronJob;
const { exec } = require('child_process');

// let job = new CronJob('10 * * * *', function() {
//     console.log("hello")
//   }, null, true, 'America/Los_Angeles');
//   job.start();

// let save = exec('git add .',
//   (error, stdout, stderr) => {
//       console.log(stdout);
//       console.log(stderr);
//       if (error !== null) {
//           console.log(`exec error: ${error}`);
//       }
//   });

console.log('hello world');

let gitAdd = exec('git add .',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });

console.log('git add');

let gitCommit = exec('git commit -m "commit commit"',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });

console.log('git commit');

let gitPush = exec('git push -u origin master',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });

console.log('git push');
