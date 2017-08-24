var jupiterHomePage = require('../PageObjects/JupiterHomePage.js');
var jupiterLoginDialogue = require('../PageObjects/JupiterLoginDialogue.js');
var jupiterUserHomePage = require('../PageObjects/JupiterUserHomePage.js')

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
    
    it("Verify a Valid Login", function () {
      jupiterLoginDialogue.setLoginUserName("user1");
      jupiterLoginDialogue.setLoginPassword("letmein");
      jupiterLoginDialogue.clickLogin();

      jupiterUserHomePage.clickUserHeaderLink();
      expect(jupiterUserHomePage.getWelcomeMessage()).toEqual("Welcome user1");
    })
})