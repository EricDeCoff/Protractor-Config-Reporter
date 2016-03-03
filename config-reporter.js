exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // jasmine-spec-reporter
    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter [ all, specs, summary, none ]
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'specs'}));
    },

    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['example-spec.js'],

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,    
        defaultTimeoutInterval: 30000,
        // jasmine-spec-reporter
        print: function() {}

    }
};
