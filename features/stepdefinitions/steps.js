
var myStepDefinitionsWrapper = function () {

    this.Given(/^As a google user I open google$/, function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.google.com");
        return;
    });

    this.When(/^I search google with "([^"]*)"$/, function (city) {
        element(by.id('lst-ib')).sendKeys('protractor');
        element(by.name('btnK')).click();
        return;
    });

    this.Then(/^I should see page title "([^"]*)"$/, function (res) {

        var title = browser.getTitle();
        console.log(title);
        //chai.assert.equal(title ,res,"Title should be something else");
        return;
    });
};

module.exports = myStepDefinitionsWrapper;