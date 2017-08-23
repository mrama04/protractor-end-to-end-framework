var jupiterHomePage = require('../PageObjects/JupiterHomePage.js');
var jupiterContactPage = require('../PageObjects/JupiterContactPage.js');

describe('Contact Page Test', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        jupiterHomePage.get();
        jupiterHomePage.navigateToContactPage();
        expect(browser.getTitle()).toEqual("Jupiter Toys")
    });

    it("Verification of Mandatory Field Error Messages", function () {

        jupiterContactPage.clickSubmit();
        expect(jupiterContactPage.getForeNameError()).toEqual("Forename is required");
        expect(jupiterContactPage.getEmailError()).toEqual("Email is required");
        expect(jupiterContactPage.getMessageError()).toEqual("Message is required");
    })
})