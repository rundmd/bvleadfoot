/**
 * Created by brendon.kelley on 5/19/16.
 */

define([
    '../utils',
    './elementsPage',
    './propertiesPage',
    'require'
], function(utils,elements,properties,require){
        function instagramLoginPage(remote){
            this.remote=remote;
        }

    instagramLoginPage.prototype={
        constructor: instagramLoginPage,

        login: function(){
            //console.login('login to insta');
            var session=this.remote;

            return session
                .get(properties.INSTA_URL)
                .then(function () {
                })
                .setFindTimeout(10000)
                .findByXpath(elements.INSTA_LOGIN_LINK_LOCATOR)
                    .click()
                    .sleep(2000)
                    .end()
                .findByXpath(elements.INSTA_USERNAME_LOCATOR)
                    .click()
                    .type(properties.INSTA_USERNAME)
                    .sleep(2000)
                    .end()
                .findByXpath(elements.INSTA_PW_LOCATOR)
                    .click()
                    .type(properties.INSTA_PW)
                    .sleep(2000)
                    .end()
                .findByXpath(elements.INSTA_LOGIN_BTN_LOCATOR)
                    .click()
                    .sleep(2000)
                    .end()
        }
    }; return instagramLoginPage;
});