import {Given, When, Then} from "cucumber";
import { browser, by, element } from "protractor";
// import {chai} from "chai";

Given('the user open website', async()=> {
    // Write code here that turns the phrase above into concrete actions
    await browser.get('http://www.angularjs.org');
  });

When('the user click on login', async()=> {
    // Write code here that turns the phrase above into concrete actions
    await element(by.css('a[href*="https://docs.angularjs.org/misc/version-support-status"]')).click();
  });
Then('the user get error message', async()=> {
    // Write code here that turns the phrase above into concrete actions
    await element(by.css('a[href*="misc/version-support-status#long-term-support"]')).click();
    
  });
