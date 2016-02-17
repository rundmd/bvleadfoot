define([
    '../utils', 
    './elementsPage', 
    './propertiesPage', 
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (utils, elementsPage, propertiesPage, pollUntil, require) {
    function langFilterPage(remote) {
        this.remote = remote;
    }

    var LANG_FILTER_LOCATOR = '//div[@data-reactid=".0.1.0.0.1.0.0.1:$languages.1.0:$placeholder"]';
    var CLEAR_FILTER1_LOCATOR = '//span[@data-reactid=".0.1.0.0.1.0.0.1:$languages.1.0:$de.0"]';
    var CLEAR_FILTER2_LOCATOR = '//span[@data-reactid=".0.1.0.0.1.0.0.1:$languages.1.0:$fr.0"]'
    var CLEAR_ALL_FILTERS_LOCATOR = '//span[@data-reactid=".0.1.0.0.1.0.0.1:$languages.1.3.0"]';
    var LANG1 = 'german';
    var LANG2 = 'french';

    langFilterPage.prototype = {
        constructor: langFilterPage,
        
        LANG_FILTER_RESULTS: '114',
        MULTI_LANG_FILTER_RESULTS: '331',
        
        addSingleFilter: function () {
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
                    return utils.enterText(session, LANG1, LANG_FILTER_LOCATOR);
                })
                .findByXpath(elementsPage.RESULTS_COUNT_LOCATOR)
                .sleep(2000)
                .getVisibleText()
                .then(function (text) {
                    return text;;
                });
        },

        addMultiFilters: function () {
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
                    return utils.enterText(session, LANG1, LANG_FILTER_LOCATOR);
                })
                .then(function () {
                    return utils.enterText(session, LANG2 /*'french'*/, LANG_FILTER_LOCATOR);
                })
                .findByXpath(elementsPage.RESULTS_COUNT_LOCATOR)
                .sleep(2000)
                .getVisibleText()
                .then(function (text) {
                    return text;;
                });
        },

        clearSingleFilter: function () {
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
                    return utils.enterText(session, LANG1, LANG_FILTER_LOCATOR);
                })
                .then(function () {
                    return utils.enterText(session, LANG2, LANG_FILTER_LOCATOR);
                })
                .sleep(2000)
                .findByXpath(CLEAR_FILTER2_LOCATOR)
                    .click()
                    .end()
                .findByXpath(elementsPage.RESULTS_COUNT_LOCATOR)
                .sleep(2000)
                .getVisibleText()
                .then(function (text) {
                    return text;;
                });
        },

        clearMultiFilters: function () {
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
                    return utils.enterText(session, LANG1, LANG_FILTER_LOCATOR);
                })
                .then(function () {
                    return utils.enterText(session, LANG2, LANG_FILTER_LOCATOR);
                })
                .sleep(2000)
                .findByXpath(CLEAR_FILTER1_LOCATOR)
                    .click()
                    .end()
                .findByXpath(CLEAR_FILTER2_LOCATOR)
                    .click()
                    .end()
                .findByXpath(elementsPage.RESULTS_COUNT_LOCATOR)
                .sleep(2000)
                .getVisibleText()
                .then(function (text) {
                    return text;;
                });
        },
        
        // Need to complete
        clearAllFilters: function () {
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
                    return utils.enterText(session, LANG1, LANG_FILTER_LOCATOR);
                })
                .then(function () {
                    return utils.enterText(session, LANG2, LANG_FILTER_LOCATOR);
                })
                .sleep(2000)
                .findByXpath(CLEAR_ALL_FILTERS_LOCATOR)
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

    return langFilterPage;
});

