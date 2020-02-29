const CronJob = require('cron').CronJob;
const { exec } = require('child_process');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');


let number = 0


let job = new CronJob('*/60 * * * * *', function () {
    itsTimeToCommit();
}, null, true, 'America/Los_Angeles');
job.start();


function itsTimeToCommit() {
    clear()
    console.log(
        chalk.green(
            figlet.textSync('Greenlight', { horizontalLayout: 'full' })
        )
    );

    console.log('Hello, I heard you like commits');
    setTimeout(() => {
        let fib = exec('node program.js',
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log();
                }
            });
    }, 10000);

    setTimeout(() => {
        let gitbranch = exec('git branch',
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log();
                }
            });
        console.log('git branch')

    }, 20000);

    setTimeout(() => {
        let gitAdd = exec('git add .',
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log();
                }
            });

        console.log('git add .')

    }, 30000);


    setTimeout(() => {
        let gitCommit = exec('git commit -m "test"',
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log();
                }
            });

        console.log("git commit")

    }, 40000);


    setTimeout(() => {
        let gitPush = exec('git push -u origin master',
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log();
                }
            });
    }, 50000);



    setTimeout(() => {
        number = number + 1

        console.log("number of times run this session", number)
    }, 55000);
};

