var JupiterLoginDialogue = function () {

    //Page Elements
    var loginUserName = element(by.id('loginUserName'));
    var loginPassword = element(by.id('loginPassword'));
    var loginButton = element(by.css('.btn-primary'));
    var cancelButton = element(by.css('.btn-cancel'));

    var loginErrorMessage = element(by.css('.alert-error'));

    //Methods
    this.setLoginUserName = function (name) {
        browser.wait(protractor.ExpectedConditions.visibilityOf(loginUserName),5000);
        loginUserName.sendKeys(name);
    }

    this.setLoginPassword = function (passwd) {
        loginPassword.sendKeys(passwd);
    }

    this.clickLogin = function () {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(loginButton), 5000);
        loginButton.click();
    }

    this.clickCancel = function () {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(cancelButton), 5000);
        loginButton.click();
    }

    this.getLoginErrorMessage = function () {
        return loginErrorMessage.getText();
    }
};

module.exports = new JupiterLoginDialogue();