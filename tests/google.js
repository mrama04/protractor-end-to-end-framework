describe('Google Test', function () {

    //Called before each 'it' block
    //Disabled Waiting for angular
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://google.com');
    });

    //Test to verify page title
    it('Verify Page Title', function () {

        element(by.id('lst-ib')).sendKeys('protractor');
        element(by.name('btnK')).click();

        expect(browser.getTitle()).toEqual("protractor - Google Search");
    })

    //Fail: Negative test to verify the title
    it('Verify Page Title: Negative', function () {

        element(by.id('lst-ib')).sendKeys('protractor');
        element(by.name('btnK')).click();

        expect(browser.getTitle()).toEqual("Google Search");
    })
})