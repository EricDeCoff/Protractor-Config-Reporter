# Protractor-Config-Reporter

### jasmine-spec-reportor

```bash
  npm install jasmine-spec-reporter --save-dev
```

# Protractor-Config-Simple

### config-with-reporter.js
```bash
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
};```

### example-spec.js
```bash
// example-spec.js
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');

    element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
  });
});
```

## usage
```bash
# If neededed
  webdriver-manager update 
  
  webdriver-manager start
  
  protractor ./config-with-reporter.js
```
