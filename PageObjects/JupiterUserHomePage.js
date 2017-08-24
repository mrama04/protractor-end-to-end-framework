var JupiterUserHomePage = function () {

    //elements
    var userHeaderLink = element(by.linkText('user1'));
    var welcomeMessage = element(by.css('h1.ng-binding'));

    //Methods
    this.clickUserHeaderLink = function () {
        browser.wait(protractor.ExpectedConditions.visibilityOf(userHeaderLink));
        userHeaderLink.click();
    }

    this.getWelcomeMessage = function () {
        browser.wait(protractor.ExpectedConditions.visibilityOf(welcomeMessage));
        return welcomeMessage.getText();
    }
}

module.exports = new JupiterUserHomePage();