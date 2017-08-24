var jupiterHomePage = require('../PageObjects/JupiterHomePage.js');
var jupiterContactPage = require('../PageObjects/JupiterContactPage.js');

describe('Jupiter Contact Page Test', function () {

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
        expect(jupiterContactPage.isMessageErrorPresent()).toBe(false);
    })

    it("Verify The Invalid Field Error Messages",function () {

        jupiterContactPage.setEmail('mk.rama04@gmailcom');
        jupiterContactPage.setTelephone('Muni');

        expect(jupiterContactPage.getEmailError()).toEqual("Please enter a valid email");
        expect(jupiterContactPage.getTelephoneError()).toEqual("Please enter a valid telephone number");
    })

    it("Verify The Invalid Field Error Messages",function () {

        jupiterContactPage.setForeName("Munikrishna");
        jupiterContactPage.setSurName("Rama")
        jupiterContactPage.setEmail('mk.rama04@gmail.com');
        jupiterContactPage.setTelephone('02020202');
        jupiterContactPage.setMessage("This is a sample message")
        jupiterContactPage.clickSubmit();

        expect(jupiterContactPage.getSuccessMessage()).toEqual("Thanks Munikrishna, we appreciate your feedback.");
    })
})