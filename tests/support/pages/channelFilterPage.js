define(['../utils', './elementsPage', './propertiesPage', 'require'], function (utils, elementsPage, propertiesPage, require) {
    function channelFilterPage(remote) {
        this.remote = remote;
    }

    var CHANNEL_FILTER_LOCATOR = '//div[@data-reactid=".0.1.0.0.1.0.0.1:$channels.1.0:$placeholder"]';
    var FACEBOOK_FILTER_RESULTS = '21';
    var CLEAR_GOOGLE_FILTER_LOCATOR = '//span[@data-reactid=".0.1.0.0.1.0.0.1:$channels.1.0:$GOOGLEPLUS.0"]';
    var CLEAR_FACEBOOK_FILTER_LOCATOR = '//span[@data-reactid=".0.1.0.0.1.0.0.1:$channels.1.0:$FACEBOOK.0"]'
    var CLEAR_ALL_FILTERS_LOCATOR = '//span[@data-reactid=".0.1.0.0.1.0.0.1:$channels.1.3.0"]';

    channelFilterPage.prototype = {
        constructor: channelFilterPage,
        
        CHANNEL_FILTER_RESULTS: '21',
        MULTI_CHANNEL_FILTER_RESULTS: '23',
        
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
                    return utils.enterText(session, 'facebook', CHANNEL_FILTER_LOCATOR);
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
                    return utils.enterText(session, 'facebook', CHANNEL_FILTER_LOCATOR);
                })
                .then(function () {
                    return utils.enterText(session, 'google', CHANNEL_FILTER_LOCATOR);
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
                    return utils.enterText(session, 'facebook', CHANNEL_FILTER_LOCATOR);
                })
                .then(function () {
                    return utils.enterText(session, 'google', CHANNEL_FILTER_LOCATOR);
                })
                .sleep(2000)
                .findByXpath(CLEAR_GOOGLE_FILTER_LOCATOR)
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
                    return utils.enterText(session, 'facebook', CHANNEL_FILTER_LOCATOR);
                })
                .then(function () {
                    return utils.enterText(session, 'google', CHANNEL_FILTER_LOCATOR);
                })
                .sleep(2000)
                .findByXpath(CLEAR_GOOGLE_FILTER_LOCATOR)
                    .click()
                    .end()
                .findByXpath(CLEAR_FACEBOOK_FILTER_LOCATOR)
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
                    return utils.enterText(session, 'facebook', CHANNEL_FILTER_LOCATOR);
                })
                .then(function () {
                    return utils.enterText(session, 'google', CHANNEL_FILTER_LOCATOR);
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

    return channelFilterPage;
});

