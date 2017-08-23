var JupiterContactPage = function () {
    //Input elements
    var foreName = element(by.model('forename'));
    var surName = element(by.id('surname'));
    var email= element(by.model('email'));
    var telephone = element(by.model('telephone'));
    var message = element(by.model('message'));
    var submitButton = element(by.css('.btn-contact'));

    //Message elements
    var foreNameError = element(by.id('forename-err'));
    var emailError = element(by.id('email-err'));
    var messageError = element(by.id('message-err'));
    var telephoneError = element(by.id('telephone-err'));
    var successMessage = element(by.css('.alert-success'));
    //Methods
    this.setForeName = function(name) {
        foreName.sendKeys(name);
    }

    this.setSurName = function (sname){
        surName.sendKeys(sname);
    }

    this.setEmail = function (emailid) {
        email.sendKeys(emailid);
    }

    this.setTelephone = function(telephonenum){
        telephone.sendKeys(telephonenum);
    }

    this.setMessage= function (msg) {
        message.sendKeys(msg)
    }

    this.clickSubmit = function (){
        browser.wait(protractor.ExpectedConditions.visibilityOf(submitButton), 20000);
        submitButton.click();
    }
    
    this.getForeNameError = function () {
        return foreNameError.getText();
    }

    this.getEmailError = function () {
        return emailError.getText();
    }

    this.getMessageError = function () {
        return messageError.getText();
    }

    this.getTelephoneError = function () {
        return telephoneError.getText();
    }

    this.getSuccessMessage = function () {
        browser.wait(protractor.ExpectedConditions.visibilityOf(successMessage),20000);
        return successMessage.getText();
    }

    this.isForeNameErrorPresent = function(){
        return browser.isElementPresent(foreNameError);
    }

    this.isEmailErrorPresent = function () {
        return browser.isElementPresent(emailError);
    }

    this.isMessageErrorPresent = function () {
        return browser.isElementPresent(messageError);
    }

    this.isTelephoneErrorPresent = function () {
        return browser.isElementPresent(telephoneError);
    }
};

module.exports = new JupiterContactPage();