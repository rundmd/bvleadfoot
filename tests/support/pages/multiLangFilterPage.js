define(['../utils', './elementsPage', './propertiesPage', 'require'], function (utils, elementsPage, propertiesPage, require) {
    function multiLangFilterPage(remote) {
        this.remote = remote;
    }

    multiLangFilterPage.prototype = {
        constructor: multiLangFilterPage,

        addFilter: function () {
            var session = this.remote;
            return session
                //.findByXpath(elementsPage.BETA_TAB_LOCATOR)
                //.click()
                //.findByXpath(elementsPage.MODAL_DIALOG_LOCATOR)
                .get(propertiesPage.CONSOLE_URL)
                .setFindTimeout(5000)
                .findById(elementsPage.FILTER_BTN_ID)
                    .click()
                    .sleep(2000) // needed for chrome
                    .end()
                .then(function () {
                    return utils.enterText(session, 'german', elementsPage.LANGUAGE_FILTER_LOCATOR);
                })
                .then(function () {
                    return utils.enterText(session, 'french', elementsPage.LANGUAGE_FILTER_LOCATOR);
                })
                .findByXpath(elementsPage.RESULTS_COUNT_LOCATOR)
                .sleep(2000)
                .getVisibleText()
                .then(function (text) {
                    return text;;
                });
        }
    };

    return multiLangFilterPage;
});

