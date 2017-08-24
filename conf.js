
exports.config = {

    //Specify to bypass selenium server. If true, then seleniumServerJar and seleniumPort configurations need to be removed
    directConnect: false,

    //Selenium Server configuration
    seleniumServerJar: 'lib/selenium-server-standalone-3.5.0.jar',
    seleniumPort: 4444,

    //Use custom driver
    chromeDriver: './bin/chromedriver.exe',

    //location of tests
    suites: {
    ContactPageTests: 'tests/ContactPageTests.js',
    LoginDialogueTests: 'tests/LoginDialogueTests.js',
    ShopPageTests: 'tests/ShopPageTests.js'
},

    //browser capabilities
    capabilities:{
        'browserName': 'chrome'
    },

    //To Maximize the browser
    //Generate XML report
    onPrepare : function() {
        browser.driver.manage().window().maximize();

        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './Reports',
            cleanDestination: true,
            filePrefix: 'xmlresults'
        }));

    },

    //Generate HTM report Using XML report
    onComplete: function() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');

            var HTMLReport = require('protractor-html-reporter');

            testConfig = {
                reportTitle: 'Test Execution Report',
                outputPath: './Reports',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true
            };
            new HTMLReport().from('Reports/xmlresults.xml', testConfig);
        });
    },

    //Console Reporting options
    jasmineNodeOpts: {
        framework:'jasmine2',
        showColors: true,
    },
};