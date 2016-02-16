define(['../utils', './elementsPage', './propertiesPage', 'require'], function (utils, elementsPage, propertiesPage, require) {
    function loginPage(remote) {
        this.remote = remote;
    }

    loginPage.prototype = {
        constructor: loginPage,

        login: function () {
            var session = this.remote;
            return session
                .get(propertiesPage.CONSOLE_URL)
                //.setFindTimeout(5000)
                .findById(elementsPage.USERNAME_INPUT_ID)
                    .click()
                    .type(propertiesPage.USERNAME)
                    .end()
                .findById(elementsPage.PASSWORD_INPUT_ID)
                    .click()
                    .type(propertiesPage.PASSWORD)
                    .end()
                .findByCssSelector(elementsPage.LOGIN_BTN_LOCATOR)
                    .click()
                    .end()
                .findByCssSelector(elementsPage.PROFILE_LINK_LOCATOR)
                .getVisibleText()
                .then(function (text) {
                    return text;;
                });
        }
    };

    return loginPage;
});

