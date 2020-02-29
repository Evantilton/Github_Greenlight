const CronJob = require('cron').CronJob;
const { exec } = require('child_process');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
      
      
      let number = 0
      
      
      let job = new CronJob('*/20 * * * * *', function() {
          pretty();
        }, null, true, 'America/Los_Angeles');
        job.start();
      
      
      function pretty(){
          clear()
      console.log(
          chalk.green(
            figlet.textSync('Greenlight', { horizontalLayout: 'full' })
          )
        );
          
      console.log('hello world');
      
      let fib = exec('node program.js',
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log();
                }
            });



      let gitbranch = exec('git branch',
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log();
                }
            });

    console.log('git branch')
      
      let gitAdd = exec('git add .',
            (error, stdout, stderr) => {
                console.log(stdout);
                console.log(stderr);
                if (error !== null) {
                    console.log();
                }
            });

      console.log('git add .')

      let gitCommit = exec('git commit -m "test"',
      (error, stdout, stderr) => {
          console.log(stdout);
          console.log(stderr);
          if (error !== null) {
              console.log();
          }
      });

      console.log("git commit")

      let gitPush = exec('git push -u origin master',
      (error, stdout, stderr) => {
          console.log(stdout);
          console.log(stderr);
          if (error !== null) {
              console.log();
          }
      });
      
      number = number+1
      
      console.log("number of times run this session", number)
      
      };

