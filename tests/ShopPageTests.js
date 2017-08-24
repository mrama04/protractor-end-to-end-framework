var jupiterHomePage = require('../PageObjects/JupiterHomePage.js');
var jupiterShopPage = require('../PageObjects/JupiterShopPage.js');

describe("Shop Page Tests", function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        jupiterHomePage.get();
        jupiterHomePage.navigateToShoppingPage();
        expect(browser.getTitle()).toEqual("Jupiter Toys");
    })

    it("Verify Product Price", function () {
        var price = jupiterShopPage.getProductPrice("Smiley Bear");
        expect(price).toEqual("$14.99");
    })
})