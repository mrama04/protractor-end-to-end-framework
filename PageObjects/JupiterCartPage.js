var JupiterCartPage = function () {

    //elements
    var emptyCartButton = element(by.linkText('Empty Cart'));
    var checkoutButton = element(by.linkText('Check Out'));
    var confirmButton = element(by.linkText('Yes'));
    var cancelButton = element(by.linkText('No'));


    //Methods
    this.clickEmptyCart = function () {
        browser.wait(protractor.ExpectedConditions.visibilityOf(emptyCartButton));
        emptyCartButton.click();
    }

    this.clickCheckOut = function () {
        browser.wait(protractor.ExpectedConditions.visibilityOf(checkoutButton));
        checkoutButton.click();
    }

    this.clickYes = function () {
        browser.wait(protractor.ExpectedConditions.visibilityOf(confirmButton));
        confirmButton.click();
    }

    this.clickNo = function () {
        browser.wait(protractor.ExpectedConditions.visibilityOf(cancelButton));
        cancelButton.click();
    }

};

module.exports = new JupiterCartPage();