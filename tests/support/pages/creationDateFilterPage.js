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
    var LAST_DAY = 'last day';
    var LAST_7_DAYS = 'last 7 days';
    var LAST_30_DAYS = 'last 30 days';
    var CUSTOM = 'custom';
    var START_DATE_INPUT_LOCATOR = '//input[@data-reactid=".0.1.0.0.1.0.0.$dateRange.1.1.$0.0.1.0"]';
    var START_DATE_DATA_REACTID = "'[data-reactid=\".0.1.0.0.1.0.0.$dateRange.1.1.$0.0.1.0\"]'";
    var PREV_MONTH = '//a[@data-reactid=".1.0.1.0"]';
    var NEXT_MONTH = '//a[@data-reactid=".1.0.1.2"]';
    var DAY_LOCATOR = '//div[@data-reactid=".1.0.2.$0.$1"]';
    var FILTER_BTN_DOCUMENT = "'btn-filters'";
    var FILTER_BTN = 'btn-filters';

    creationDateFilterPage.prototype = {
        constructor: creationDateFilterPage,
        
        RESULTS_LAST_DAY: '43',
        RESULTS_7_DAYS: '311',
        RESULTS_30_DAYS: '1499',
        CUSTOM_RESULTS: '4053',
 
        custom: function () {
            var session = this.remote;
            return session
                //.findByXpath(elementsPage.BETA_TAB_LOCATOR)
                //.click()
                .get(propertiesPage.CONSOLE_URL)
                .then(pollUntil('return document.getElementById('+FILTER_BTN_DOCUMENT+');', 10000)) 
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.enterText(session, CUSTOM, CREATION_DATE_FILTER_LOCATOR);
                })
                .then(pollUntil(function (START_DATE_DATA_REACTID) {
                    if(document.querySelector('[data-reactid=\".0.1.0.0.1.0.0.$dateRange.1.1.$0.0.1.0\"]')) {
                        return document.querySelector('[data-reactid=\".0.1.0.0.1.0.0.$dateRange.1.1.$0.0.1.0\"]').offsetWidth;
                    }
                    return null;
                }, [] , 2000))
                .findByXpath(START_DATE_INPUT_LOCATOR)
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
        },

        lastDay: function () {
            var session = this.remote;  
            return session  
                //.findByXpath(elementsPage.BETA_TAB_LOCATOR)
                //.click()
                .get(propertiesPage.CONSOLE_URL)
                .then(pollUntil('return document.getElementById('+FILTER_BTN_DOCUMENT+');', 10000))
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.enterText(session, LAST_DAY, CREATION_DATE_FILTER_LOCATOR);
                })
                .findByXpath(elementsPage.RESULTS_COUNT_LOCATOR)
                .sleep(2000)
                .getVisibleText()
                .then(function (text) {
                    return text;;
                });
        },

        last7Days: function () {
            var session = this.remote;
            return session
                //.findByXpath(elementsPage.BETA_TAB_LOCATOR)
                //.click()
                .get(propertiesPage.CONSOLE_URL)
                .then(pollUntil('return document.getElementById('+FILTER_BTN_DOCUMENT+');', 10000))
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.enterText(session, LAST_7_DAYS, CREATION_DATE_FILTER_LOCATOR);
                })
                .findByXpath(elementsPage.RESULTS_COUNT_LOCATOR)
                .sleep(2000)
                .getVisibleText()
                .then(function (text) {
                    return text;;
                });
        },

        last30Days: function () {
            var session = this.remote;
            return session
                //.findByXpath(elementsPage.BETA_TAB_LOCATOR)
                //.click()
                .get(propertiesPage.CONSOLE_URL)
                .then(pollUntil('return document.getElementById('+FILTER_BTN_DOCUMENT+');', 10000))
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.enterText(session, LAST_30_DAYS, CREATION_DATE_FILTER_LOCATOR);
                })
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

