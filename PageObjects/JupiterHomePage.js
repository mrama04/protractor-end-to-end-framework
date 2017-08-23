var JupiterHomePage = function () {

    var homePageLink = element(by.linkText('Home'));
    var contactPageLink = element(by.linkText('Contact'));
    var shopPageLink = element(by.linkText('Shop'));
    var loginPageLink = element(by.linkText('Login'));


    this.get = function(){
        browser.get("https://jupiter.cloud.planittesting.com");
    }

    this.navigateToLoginPage = function () {
        loginPageLink.click()
    }

    this.navigateToContactPage = function () {
        contactPageLink.click()
    }

    this.navigateToHomePage= function () {
        homePageLink.click()
    }

    this.navigateToShoppingPage = function () {
        shopPageLink.click()
    }
};

module.exports = new JupiterHomePage();