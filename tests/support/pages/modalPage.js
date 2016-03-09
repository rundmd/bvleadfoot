define([
    'intern/chai!assert',
    '../utils', 
    './elementsPage', 
    './propertiesPage', 
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert, utils, elements, properties, pollUntil, require) {
    function modalPage(remote) {
        this.remote = remote;
    }

    modalPage.prototype = {
        constructor: modalPage,
       
        close: function () {
            var session = this.remote;
            return session
                .get(properties.CONSOLE_URL)
                .findByXpath(elements.BETA_TAB_LOCATOR)
                    .click()
                    .end()
                .setFindTimeout(10000)
                .findByXpath(elements.MODAL_CLOSE_BTN_LOCATOR)
                    .click()
                    .end()
                .findById('btn-filters')
                .getVisibleText()   
                .then(function (text) {
                    assert.equal(text, properties.FILTER_BTN_TEXT);
                });
        },

        navigate: function () {
            var session = this.remote;
            return session
                .get(properties.CONSOLE_URL)
                .then(function (){
                    utils.removeCookie(session, properties.COOKIE);
                })
                .findByXpath(elements.BETA_TAB_LOCATOR)
                    .click()
                    .end()
                .setFindTimeout(10000)
                .findByXpath(elements.MODAL_LOCATOR)
                .findByXpath(elements.MODAL_TEXT1_LOCATOR)
                .getVisibleText()
                .then(function (text){
                    assert.equal(text, properties.AS_MODAL_TEXT1);
                })
                .findByXpath(elements.MODAL_NEXT_BTN1_LOCATOR)
                    .click()
                    .end()
                .findByXpath(elements.MODAL_TEXT2_LOCATOR)
                .getVisibleText()
                .then(function (text){
                    assert.equal(text, properties.AS_MODAL_TEXT2);
                })
                .findByXpath(elements.MODAL_NEXT_BTN2_LOCATOR)
                    .click()
                    .end()
                .findByXpath(elements.MODAL_TEXT3_LOCATOR)
                .getVisibleText()
                .then(function (text){
                    assert(text, properties.AS_MODAL_TEXT3);
                })
                .findByXpath(elements.MODAL_NAV_RESET_BTN_LOCATOR)
                    .click()
                    .end()
                .findByXpath(elements.MODAL_TEXT1_LOCATOR)
                .getVisibleText()
                .then(function (text){
                    assert.equal(text, properties.AS_MODAL_TEXT1);
                });
        }

    };

    return modalPage;
});

