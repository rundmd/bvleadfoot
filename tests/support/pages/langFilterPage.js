define(['../utils', './elementsPage', './propertiesPage', 'require'], function (utils, elementsPage, propertiesPage, require) {
    function langFilterPage(remote) {
        this.remote = remote;
    }

    var LANG_FILTER_LOCATOR = '//div[@data-reactid=".0.1.0.0.1.0.0.1:$languages.1.0:$placeholder"]';
    var CLEAR_GERMAN_FILTER_LOCATOR = '//span[@data-reactid=".0.1.0.0.1.0.0.1:$languages.1.0:$de.0"]';
    var CLEAR_FRENCH_FILTER_LOCATOR = '//span[@data-reactid=".0.1.0.0.1.0.0.1:$languages.1.0:$fr.0"]'
    var CLEAR_ALL_FILTERS_LOCATOR = '//span[@data-reactid=".0.1.0.0.1.0.0.1:$languages.1.3.0"]';

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
                .setFindTimeout(5000)
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.enterText(session, 'german', LANG_FILTER_LOCATOR);
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
                .setFindTimeout(5000)
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.enterText(session, 'german', LANG_FILTER_LOCATOR);
                })
                .then(function () {
                    return utils.enterText(session, 'french', LANG_FILTER_LOCATOR);
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
                .setFindTimeout(5000)
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.enterText(session, 'german', LANG_FILTER_LOCATOR);
                })
                .then(function () {
                    return utils.enterText(session, 'french', LANG_FILTER_LOCATOR);
                })
                .sleep(2000)
                .findByXpath(CLEAR_FRENCH_FILTER_LOCATOR)
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
                .setFindTimeout(5000)
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.enterText(session, 'german', LANG_FILTER_LOCATOR);
                })
                .then(function () {
                    return utils.enterText(session, 'french', LANG_FILTER_LOCATOR);
                })
                .sleep(2000)
                .findByXpath(CLEAR_GERMAN_FILTER_LOCATOR)
                    .click()
                    .end()
                .findByXpath(CLEAR_FRENCH_FILTER_LOCATOR)
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
                .setFindTimeout(5000)
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.enterText(session, 'german', LANG_FILTER_LOCATOR);
                })
                .then(function () {
                    return utils.enterText(session, 'french', LANG_FILTER_LOCATOR);
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

