import {Before,After} from "cucumber";
import { browser } from "protractor";

//before i tag samo prije tog taga
Before({tags: "@smoke"}, ()=>{
    //this line should be executed before each test with @smoke tag
    browser.manage().window().maximize()
});

//prije svakog scenarija
After(async function(scenario) {
    if (scenario.result.status !== 'Passed') {
        // screenShot is a base-64 encoded PNG
            const screenShot = await browser.takeScreenshot();
            this.attach(screenShot, "image/png");
    }
});


