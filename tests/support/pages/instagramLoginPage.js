/**
 * Created by brendon.kelley on 5/19/16.
 */

define([
    '../utils',
    '../sharedFunctions',
    './elementsPage',
    './propertiesPage',
    'require'
], function(utils,shared,elements,properties,require){
        function instagramLoginPage(remote){
            this.remote=remote;
        }

    instagramLoginPage.prototype={
        constructor: instagramLoginPage,

        login: function(){
            var session=this.remote;

            return session
                .get(properties.INSTA_URL)
                .setFindTimeout(10000)
                .then(function() {
                    return shared.clickAButton(session, elements.INSTA_LOGIN_LINK_LOCATOR, 'xpath');
                })
                .then(function() {
                    return shared.enterText(session, elements.INSTA_USERNAME_LOCATOR, properties.INSTA_USERNAME, 'xpath');
                })
                .then(function(){
                    return shared.enterText(session, elements.INSTA_PW_LOCATOR, properties.INSTA_PW, 'xpath');
                })
                .then(function() {
                    return shared.clickAButton(session, elements.INSTA_LOGIN_BTN_LOCATOR, 'xpath')
                })
        }
    }; return instagramLoginPage;
});