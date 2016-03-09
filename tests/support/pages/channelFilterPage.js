define([
    '../utils', 
    './elementsPage', 
    './propertiesPage', 
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (utils, elements, properties, pollUntil, require) {
    function channelFilterPage(remote) {
        this.remote = remote;
    }

    var FILTERS = {
            facebook: {locator: elements.CHANNEL_FILTER_LOCATOR, text: 'facebook', clearLocator: elements.FACEBOOK_CLEAR_LOCATOR},
            googleplus: {locator: elements.CHANNEL_FILTER_LOCATOR, text: 'google', clearLocator: elements.GOOGLEPLUS_CLEAR_LOCATOR}
    };

    channelFilterPage.prototype = {
        constructor: channelFilterPage,
        
        singleFilter: function () {
            var session = this.remote;
            return session
                .then(function (){
                    return utils.openAdvancedSearch(session);
                })
                .setFindTimeout(10000)
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.addFilter(session, FILTERS.facebook);
                })
                .findByXpath(elements.RESULTS_COUNT_LOCATOR)
                .sleep(properties.FILTER_TIMEOUT)
                .getVisibleText();
        },

        multiFilters: function () {
            var session = this.remote;
            return session
                .then(function (){
                    return utils.openAdvancedSearch(session);
                })
                .setFindTimeout(10000)
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.addFilter(session, FILTERS.facebook);
                })
                .then(function () {
                    return utils.addFilter(session, FILTERS.googleplus);
                })
                .findByXpath(elements.RESULTS_COUNT_LOCATOR)
                .sleep(properties.FILTER_TIMEOUT)
                .getVisibleText();
        },

        clearSingleFilter: function () {
            var session = this.remote;
            return session
                .then(function (){
                    return utils.openAdvancedSearch(session);
                })
                .setFindTimeout(10000)
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.addFilter(session, FILTERS.facebook);
                })
                .then(function () {
                    return utils.addFilter(session, FILTERS.googleplus);
                })
                .sleep(2000)
                .findByXpath(FILTERS.googleplus.clearLocator)
                    .click()
                    .end()
                .findByXpath(elements.RESULTS_COUNT_LOCATOR)
                .sleep(properties.FILTER_TIMEOUT)
                .getVisibleText();
        },

        clearMultiFilters: function () {
            var session = this.remote;
            return session
                .then(function (){
                    return utils.openAdvancedSearch(session);
                })
                .setFindTimeout(10000)
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.addFilter(session, FILTERS.facebook);
                })
                .then(function () {
                    return utils.addFilter(session, FILTERS.googleplus);
                })
                .sleep(2000)
                .findByXpath(FILTERS.facebook.clearLocator)
                    .click()
                    .end()
                .findByXpath(FILTERS.googleplus.clearLocator)
                    .click()
                    .end()
                .findByXpath(elements.RESULTS_COUNT_LOCATOR)
                .sleep(properties.FILTER_TIMEOUT)
                .getVisibleText();
        },
        
        clearAllFilters: function () {
            var session = this.remote;
            return session
                .then(function (){
                    return utils.openAdvancedSearch(session);
                })
                .setFindTimeout(10000)
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.addFilter(session, FILTERS.facebook);
                })
                .then(function () {
                    return utils.addFilter(session, FILTERS.googleplus);
                })
                .sleep(2000)
                .findByXpath(elements.CLEAR_ALL_CHANNELS_LOCATOR)
                    .click()
                    .end()
                .findByXpath(elements.RESULTS_COUNT_LOCATOR)
                .sleep(properties.FILTER_TIMEOUT)
                .getVisibleText();
        }

    };

    return channelFilterPage;
});

