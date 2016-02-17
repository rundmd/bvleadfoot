define([
    '../utils', 
    './elementsPage', 
    './propertiesPage', 
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (utils, elementsPage, propertiesPage, pollUntil, require) {
    function creationDateFilterPage(remote) {
        this.remote = remote;
    }

    var CREATION_DATE_FILTER_LOCATOR = '//div[@data-reactid=".0.1.0.0.1.0.0.$dateRange.0.1.0:$placeholder"]';
    var CLEAR_FILTER_LOCATOR = '//span[@data-reactid=".0.1.0.0.1.0.0.$dateRange.0.1.3.0"]';
    var LASTDAY = 'last day';
    var LAST7DAYS = 'last 7 days';
    var LAST30DAYS = 'last 30 days';
    var CUSTOM = 'custom';
    var START_DATE_INPUT_LOCATOR = '//input[@data-reactid=".0.1.0.0.1.0.0.$dateRange.1.1.$0.0.1.0"]';
    var PREV_MONTH = '//a[@data-reactid=".1.0.1.0"]';
    var NEXT_MONTH = '//a[@data-reactid=".1.0.1.2"]';
    var DAY_LOCATOR = '//div[@data-reactid=".1.0.2.$0.$1"]';

    creationDateFilterPage.prototype = {
        constructor: creationDateFilterPage,
        
        CUSTOM_RESULTS: '4001',
        
        custom: function () {
            var session = this.remote;
            return session
                //.findByXpath(elementsPage.BETA_TAB_LOCATOR)
                //.click()
                .get(propertiesPage.CONSOLE_URL)
                .then(pollUntil('return document.getElementById("btn-filters");', 10000)) 
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.enterText(session, CUSTOM, CREATION_DATE_FILTER_LOCATOR);
                })
                .findByXpath(START_DATE_INPUT_LOCATOR)
                .sleep(1000)
                //.then(function (element) {
                  //      pollUntil(utils.elementIsVisible(element), 5000);
                //})
                    .click()
                    .end()
                .findByXpath(PREV_MONTH)
                    .click()
                    .end()
                .findByXpath(DAY_LOCATOR)
                    .click()
                    .end()
                .findByXpath(elementsPage.RESULTS_COUNT_LOCATOR)
                .sleep(2000)
                .getVisibleText()
                .then(function (text) {
                    return text;;
                });
        }
    };

    return creationDateFilterPage;
});

