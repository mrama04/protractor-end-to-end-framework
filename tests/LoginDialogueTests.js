var jupiterHomePage = require('../PageObjects/JupiterHomePage.js');
var jupiterLoginDialogue = require('../PageObjects/JupiterLoginDialogue.js');

describe ("Login Dialogues Tests", function () {
    
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        jupiterHomePage.get();
        jupiterHomePage.navigateToLoginDialogue();
    })

    it("Verify The Invalid Login Message", function () {
            jupiterLoginDialogue.setLoginUserName('xxx');
            jupiterLoginDialogue.setLoginPassword('yyy');
            jupiterLoginDialogue.clickLogin();

            expect(jupiterLoginDialogue.getLoginErrorMessage()).toEqual("Your login details are incorrect");
    })
})