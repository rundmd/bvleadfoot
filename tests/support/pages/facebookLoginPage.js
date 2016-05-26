/**
 * Created by brendon.kelley on 5/26/16.
 */
define([
    '../utils',
    './elementsPage',
    './propertiesPage',
    'require'
], function(utils,elements,properties,require){
    function facebookLoginPage(remote){
        this.remote=remote;
    }

    facebookLoginPage.prototype={
        constructor: facebookLoginPage,

        login: function(){
            //console.login('login to facebook');
            var session=this.remote;

            return session
                .get(properties.FACEBOOK_URL)
                .then(function () {
                })
               /* .findByXpath(elements.INSTA_LOGIN_LINK_LOCATOR)
                .click()
                .sleep(2000)
                .end()*/
                .findByXpath(elements.FB_EMAIL_LOCATOR)
                .click()
                .type(properties.FACEBOOK_EMAIL)
                .sleep(2000)
                .end()
                .findByXpath(elements.FB_PASSWORD_LOCATOR)
                .click()
                .type(properties.FACEBOOK_PW)
                .sleep(2000)
                .end()
                .findByXpath(elements.FB_LOGIN_BTN_LOCATOR)
                .click()
                .sleep(2000)
                .end()
        }
    }; return facebookLoginPage;
});