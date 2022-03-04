"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
describe('angularjs homepage', function () {
    it('should greet the named user', function () {
        // Load the AngularJS homepage.
        protractor_1.browser.get('http://www.angularjs.org');
        // Find the element with ng-model matching 'yourName' - this will
        // find the <input type="text" ng-model="yourName"/> element - and then
        // type 'Julie' into it.
        (0, protractor_2.element)(protractor_2.by.model('yourName')).sendKeys('Julie');
        // Find the element with binding matching 'yourName' - this will
        // find the <h1>Hello {{yourName}}!</h1> element.
        var greeting = (0, protractor_2.element)(protractor_2.by.binding('yourName'));
        // Assert that the text element has the expected value.
        // Protractor patches 'expect' to understand promises.
        expect(greeting.getText()).toEqual('Hello Julie!');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFtQztBQUNuQywyQ0FBdUM7QUFFdkMsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBQzNCLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRTtRQUNoQywrQkFBK0I7UUFDL0Isb0JBQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUV4QyxpRUFBaUU7UUFDakUsdUVBQXVFO1FBQ3ZFLHdCQUF3QjtRQUN4QixJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoRCxnRUFBZ0U7UUFDaEUsaURBQWlEO1FBQ2pELElBQUksUUFBUSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFFL0MsdURBQXVEO1FBQ3ZELHNEQUFzRDtRQUV0RCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==