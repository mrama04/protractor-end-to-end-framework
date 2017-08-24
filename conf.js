
exports.config = {

    //Specify to bypass selenium server. If true, then seleniumServerJar and seleniumPort configurations need to be removed
    directConnect: false,

    //Selenium Server configuration
    seleniumServerJar: 'lib/selenium-server-standalone-3.5.0.jar',
    seleniumPort: 4444,
    //Use custom driver
    chromeDriver: './bin/chromedriver.exe',

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    //browser capabilities
    capabilities:{
        'browserName': 'chrome'
    },

    //location of tests
    specs: [
        'features/*.feature'
    ],

    cucumberOpts: {
        format: ['json:reports/results.json', 'pretty'],
        require: 'features/stepdefinitions/*.js',
        profile: false,
        'no-source': true
    },
};