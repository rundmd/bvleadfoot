define([
    '../utils', 
    './elementsPage', 
    './propertiesPage', 
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (utils, elements, properties, pollUntil, require) {
    function langFilterPage(remote) {
        this.remote = remote;
    }
    
    var FILTERS = {
            german: {locator: elements.LANG_FILTER_LOCATOR, text: 'german', clearLocator: elements.GERMAN_CLEAR_LOCATOR},
            french: {locator: elements.LANG_FILTER_LOCATOR, text: 'french', clearLocator: elements.FRENCH_CLEAR_LOCATOR}
    };

    langFilterPage.prototype = {
        constructor: langFilterPage,
        
        singleFilter: function () {
            var session = this.remote;
            return session
                .get(properties.CONSOLE_URL)
                .findByXpath(elements.BETA_TAB_LOCATOR)
                    .click()
                    .end()
                .setFindTimeout(5000)
                //.then(pollUntil('return document.getElementById("btn-filters");', 10000))
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.addFilter(session, FILTERS.german);
                })
                .findByXpath(elements.RESULTS_COUNT_LOCATOR)
                .sleep(properties.FILTER_TIMEOUT)
                .getVisibleText();
        },

        multiFilters: function () {
            var session = this.remote;
            return session
                .get(properties.CONSOLE_URL)
                .findByXpath(elements.BETA_TAB_LOCATOR)
                    .click()
                    .end()
                .setFindTimeout(5000)
                //.then(pollUntil('return document.getElementById("btn-filters");', 10000))
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.addFilter(session, FILTERS.german);
                })
                .then(function () {
                    return utils.addFilter(session, FILTERS.french);
                })
                .findByXpath(elements.RESULTS_COUNT_LOCATOR)
                .sleep(properties.FILTER_TIMEOUT)
                .getVisibleText();
        },

        clearSingleFilter: function () {
            var session = this.remote;
            return session
                .get(properties.CONSOLE_URL)
                .findByXpath(elements.BETA_TAB_LOCATOR)
                .click()
                .end()
                .setFindTimeout(5000)
                //.then(pollUntil('return document.getElementById("btn-filters");', 10000))
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.addFilter(session, FILTERS.german);
                })
                .then(function () {
                    return utils.addFilter(session, FILTERS.french);
                })
                .sleep(2000)
                .findByXpath(FILTERS.french.clearLocator)
                    .click()
                    .end()
                .findByXpath(elements.RESULTS_COUNT_LOCATOR)
                .sleep(properties.FILTER_TIMEOUT)
                .getVisibleText();
        },

        clearMultiFilters: function () {
            var session = this.remote;
            return session
                .get(properties.CONSOLE_URL)
                .findByXpath(elements.BETA_TAB_LOCATOR)
                    .click()
                    .end()
                .setFindTimeout(5000)
                //.then(pollUntil('return document.getElementById("btn-filters");', 10000))
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.addFilter(session, FILTERS.german);
                })
                .then(function () {
                    return utils.addFilter(session, FILTERS.french);
                })
                .sleep(2000)
                .findByXpath(FILTERS.german.clearLocator)
                    .click()
                    .end()
                .findByXpath(FILTERS.french.clearLocator)
                    .click()
                    .end()
                .findByXpath(elements.RESULTS_COUNT_LOCATOR)
                .sleep(properties.FILTER_TIMEOUT)
                .getVisibleText();
        },
        
        clearAllFilters: function () {
            var session = this.remote;
            return session
                .get(properties.CONSOLE_URL)
                .findByXpath(elements.BETA_TAB_LOCATOR)
                    .click()
                    .end()
                .setFindTimeout(5000)
                //.then(pollUntil('return document.getElementById("btn-filters");', 10000))
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.addFilter(session, FILTERS.german);
                })
                .then(function () {
                    return utils.addFilter(session, FILTERS.french);
                })
                .sleep(2000)
                .findByXpath(elements.CLEAR_ALL_LANG_LOCATOR)
                    .click()
                    .end()
                .findByXpath(elements.RESULTS_COUNT_LOCATOR)
                .sleep(properties.FILTER_TIMEOUT)
                .getVisibleText();
        }

    };

    return langFilterPage;
});

