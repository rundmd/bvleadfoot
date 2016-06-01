define([
    'intern/chai!assert',
    '../utils', 
    './elementsPage', 
    './propertiesPage', 
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert, utils, elements, properties, pollUntil, require) {
    function instagramLoginPage(remote) {
        this.remote = remote;
    }

    instagramLoginPage.prototype = {
        constructor: instagramLoginPage,
       
        login: function () {
            var session = this.remote;
            var handle;

            return session
                .get(properties.INSTA_URL)
                .setFindTimeout(20000)
                .findByXpath(elements.INSTA_LOGIN_LINK_LOCATOR)
                    .click()
                    .end()
                .findByXpath(elements.INSTA_USERNAME_LOCATOR)
                    .click()
                    .type(properties.INSTA_USERNAME)
                    .end()
                .findByXpath(elements.INSTA_PW_LOCATOR)
                    .click()
                    .type(properties.INSTA_PW)
                    .end()
                .findByXpath(elements.INSTA_LOGIN_BTN_LOCATOR)
                    .click()
                    .end()
                .findByXpath(elements.INSTA_PROFILE_LOCATOR)
                .getVisibleText()
                .then(function (text) {
                    assert.equal(text, properties.INSTA_PROFILE_TEXT);
                }); 
                
        }

    };

    return instagramLoginPage;
});

