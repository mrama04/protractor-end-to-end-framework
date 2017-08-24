var jupiterHomePage = require('../PageObjects/JupiterHomePage.js');
var jupiterShopPage = require('../PageObjects/JupiterShopPage.js');
var jupiterCartPage = require('../PageObjects/JupiterCartPage.js');

describe("Cart Page Tests", function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        jupiterHomePage.get();
        expect(browser.getTitle()).toEqual("Jupiter Toys");
    })

    it("Verify Cart Count", function () {
        expect(jupiterHomePage.getCartCount()).toEqual('0');
        jupiterHomePage.navigateToShoppingPage();
        jupiterShopPage.addProductToCart("Smiley Bear");
        expect(jupiterHomePage.getCartCount()).toEqual('1');
        jupiterHomePage.navigateToCartPage();
        jupiterCartPage.clickEmptyCart();
        jupiterCartPage.clickYes();
        expect(jupiterHomePage.getCartCount()).toEqual('0');
   })
})