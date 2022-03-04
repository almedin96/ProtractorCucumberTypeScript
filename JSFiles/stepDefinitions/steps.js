"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
// import {chai} from "chai";
(0, cucumber_1.Given)('the user open website', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get('http://www.angularjs.org');
}));
(0, cucumber_1.When)('the user click on login', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield (0, protractor_1.element)(protractor_1.by.css('a[href*="https://docs.angularjs.org/misc/version-support-status"]')).click();
}));
(0, cucumber_1.Then)('the user get error message', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield (0, protractor_1.element)(protractor_1.by.css('a[href*="misc/version-support-status#long-term-support"]')).click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMkM7QUFDM0MsMkNBQWtEO0FBQ2xELDZCQUE2QjtBQUU3QixJQUFBLGdCQUFLLEVBQUMsdUJBQXVCLEVBQUUsR0FBTyxFQUFFO0lBQ3BDLG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVMLElBQUEsZUFBSSxFQUFDLHlCQUF5QixFQUFFLEdBQU8sRUFBRTtJQUNyQyxvRUFBb0U7SUFDcEUsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDckcsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLElBQUEsZUFBSSxFQUFDLDRCQUE0QixFQUFFLEdBQU8sRUFBRTtJQUN4QyxvRUFBb0U7SUFDcEUsTUFBTSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFNUYsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9