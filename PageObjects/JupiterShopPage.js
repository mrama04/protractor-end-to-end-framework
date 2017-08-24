var JupiterShopPage = function () {

    //Methods
    this.getProductPrice = function (productName) {
        var productPrice = element(by.xpath("//div[h4[contains(@class,'product-title')]='"+productName+"']//span[contains(@class,'product-price')]"));
        browser.wait(protractor.ExpectedConditions.visibilityOf(productPrice));
        return productPrice.getText();
    }
};

module.exports = new JupiterShopPage();