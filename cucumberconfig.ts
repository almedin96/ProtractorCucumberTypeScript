import {Config} from 'protractor';
import * as reporter from 'cucumber-html-reporter';

export let config: Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    dirrectConnect: true,
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities: {
        browserName: 'chrome'
      },

    specs: ['../feature/demo.feature'],
    cucumberOpts: {
      
      format: 'json: cucumberreport.json',
     
        require: [
          './stepDefinitions/*.js' // accepts a glob
        ]
      },
      onComplete: ()=>{
        var options = {
          theme: 'hierarchy' as const,
          jsonFile: 'JSFiles/ cucumberreport.json',
          output: 'cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "App Version":"verzija broj",
              "Test Environment": "development-staging ili sta vec",
              "Browser": "Chrome  verzija chroma",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
  
      reporter.generate(options);
      },

  };
  