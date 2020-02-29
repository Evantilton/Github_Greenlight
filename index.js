let CronJob = require('cron').CronJob;
      const { exec } = require('child_process');
      const chalk = require('chalk');
      const clear = require('clear');
      const figlet = require('figlet');
      
      
      let number = 0
      
      
      let job = new CronJob('*/10 * * * * *', function() {
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
      
      let gitbranch = exec('node program.js',
              );
        console.log(gitbranch);

      console.log('git branch');
      
      let gitadd = exec('git add .')

      console.log('git add .')

      let gitcommit = exec('git commit -m "test"')

      console.log("git commit")
      
      number = number+1
      
      console.log("number of times run this session", number)
      
      };
      