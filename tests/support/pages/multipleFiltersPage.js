define([
    '../utils', 
    './elementsPage', 
    './propertiesPage', 
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (utils, elements, properties, pollUntil, require) {
    function multipleFiltersPage(remote) {
        this.remote = remote;
    }

    var FILTERS = {
            channel: {locator: elements.CHANNEL_FILTER_LOCATOR, text: 'instagram'}, 
            lang: {locator: elements.LANG_FILTER_LOCATOR, text: 'french'}, 
            attachment: {locator: elements.ATTACHMENTS_FILTER_LOCATOR, text: 'geotag'},
            rm: {locator: elements.RM_FILTER_LOCATOR, text: 'granted'},
            moderation: {locator: elements.MODERATION_FILTER_LOCATOR, text: 'approved'},
            tagging: {locator: elements.TAGGING_FILTER_LOCATOR, text: 'completed'},
            display: {locator: elements.DISPLAY_FILTER_LOCATOR, text: 'live'}
    };

    multipleFiltersPage.prototype = {
        constructor: multipleFiltersPage,
       
        setCombinationFilter1: function () {
            var session = this.remote;
            return session
                .get(properties.CONSOLE_URL)
                .findByXpath(elements.BETA_TAB_LOCATOR)
                    .click()
                    .end()
                .setFindTimeout(10000)
                //.then(pollUntil('return document.getElementById("btn-filters");', 10000)) 
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.addComboFilter(session, FILTERS.channel);
                })
                .sleep(properties.COMBINATION_FILTER_TIMEOUT)
                .then(function () {
                    return utils.addComboFilter(session, FILTERS.lang);
                })
                .sleep(properties.COMBINATION_FILTER_TIMEOUT)
                .then(function () {
                    return utils.addComboFilter(session, FILTERS.attachment);
                })
                .findByXpath(elements.RESULTS_COUNT_LOCATOR)
                .sleep(properties.COMBINATION_FILTER_TIMEOUT)
                .getVisibleText()
                .then(function (text) {
                    return text;;
                });
        },

        setCombinationFilter2: function () {
            var session = this.remote;
            return session
                .get(properties.CONSOLE_URL)
                .findByXpath(elements.BETA_TAB_LOCATOR)
                    .click()
                    .end()
                .setFindTimeout(10000)
                //.then(pollUntil('return document.getElementById("btn-filters");', 10000))
                .findById('btn-filters')
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.addComboFilter(session, FILTERS.channel);
                })
                .sleep(properties.COMBINATION_FILTER_TIMEOUT)
                .then(function () {
                    return utils.addComboFilter(session, FILTERS.rm);
                })
                .sleep(properties.COMBINATION_FILTER_TIMEOUT)
                .then(function () {
                    return utils.addComboFilter(session, FILTERS.moderation);
                })
                .sleep(properties.COMBINATION_FILTER_TIMEOUT)
                .then(function () {
                    return utils.addComboFilter(session, FILTERS.tagging);
                })
                .sleep(properties.COMBINATION_FILTER_TIMEOUT)
                .then(function () {
                    return utils.addComboFilter(session, FILTERS.display);
                })
                .findByXpath(elements.RESULTS_COUNT_LOCATOR)
                .sleep(properties.COMBINATION_FILTER_TIMEOUT)
                .getVisibleText();
        }


    };

    return multipleFiltersPage;
});

