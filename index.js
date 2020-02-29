const CronJob = require('cron').CronJob;
const { exec } = require('child_process');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

let number = 0
//this cronjob is currently set to run one per minute on startup
let job = new CronJob('*/60 * * * * *', function () {
    itsTimeToCommit();
}, null, true, 'America/Los_Angeles');
job.start();

//this program executes terminal commands, I use set-timeout to make sure they don't conflict
function itsTimeToCommit() {
    //clear is used to keep the terminal looking clean each loop
    clear();
    //chalk and figlet just make the terminal have a nice title
    console.log(
        chalk.green(
            figlet.textSync('Greenlight', { horizontalLayout: 'full' })
        )
    );

    console.log('Hello, I heard you like commits, lets go for the HI SCORE!');

    //this executes the first command and tells program.js to run and rewrite itself, 
    //this is necessary because a change must be made to something so it can be committed.
    setTimeout(() => {
        let program = exec('node program.js',
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log();
                }
            });
    }, 10000);

    //executes git add .
    setTimeout(() => {
        let gitAdd = exec('git add .',
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log();
                }
            });

        console.log('just ran git add .')

    }, 20000);

    //executes git commit -m "test"
    setTimeout(() => {
        let gitCommit = exec('git commit -m "test"',
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log();
                }
            });

        console.log("just ran git commit")

    }, 30000);

    //executes git push -u origin master
    setTimeout(() => {
        let gitPush = exec('git push -u origin master',
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log();
                }
            });

            console.log("just ran git push")

    }, 40000);


    //tells you how many times this program has been run this session
    setTimeout(() => {
        number = number + 1

        console.log("number of times run this session", number)
    }, 50000);
};

