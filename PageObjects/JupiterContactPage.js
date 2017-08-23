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
};

module.exports = new JupiterContactPage();