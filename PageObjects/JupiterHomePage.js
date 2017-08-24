var JupiterHomePage = function () {

    //Page Elements
    var homePageLink = element(by.linkText('Home'));
    var contactPageLink = element(by.linkText('Contact'));
    var shopPageLink = element(by.linkText('Shop'));
    var loginDialogueLink = element(by.linkText('Login'));
    var cartPageLink = element(by.partialLinkText('Cart'));
    var cartCount = cartPageLink.element(by.css('.cart-count'));


    //Methods
    this.get = function(){
        browser.get("https://jupiter.cloud.planittesting.com");
    }

    this.navigateToLoginDialogue = function () {
        loginDialogueLink.click()
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

    this.navigateToCartPage = function () {
        cartPageLink.click();
    }

    this.getCartCount = function () {
        return cartCount.getText();
    }
};

module.exports = new JupiterHomePage();