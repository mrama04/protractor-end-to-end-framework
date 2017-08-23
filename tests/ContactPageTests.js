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

        //Test for mandatory errors present
        expect(jupiterContactPage.getForeNameError()).toEqual("Forename is required");
        expect(jupiterContactPage.getEmailError()).toEqual("Email is required");
        expect(jupiterContactPage.getMessageError()).toEqual("Message is required");

        jupiterContactPage.setForeName("Munikrishna");
        jupiterContactPage.setEmail("mk.rama04@gmail.com");
        jupiterContactPage.setMessage("These are my details");

        //verify if the mandatory errors are not present
        expect(jupiterContactPage.isForeNameErrorPresent()).toBe(false);
        expect(jupiterContactPage.isEmailErrorPresent()).toBe(false);
        expect(jupiterContactPage.isMessagErrorPresent()).toBe(false);
    })
})