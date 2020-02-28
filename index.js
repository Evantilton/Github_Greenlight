let CronJob = require('cron').CronJob;
const { exec } = require('child_process');

let job = new CronJob('10 * * * * *', function() {
    console.log("hello")
    // yourscript;
    // commit;
  }, null, true, 'America/Los_Angeles');
  job.start();



let yourscript = exec('git add .',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });

let commit = exec('git commit -m "commit"',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
