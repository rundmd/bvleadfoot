/**
 * Created by brendon.kelley on 5/19/16.
 */

define([
    '../utils',
    './common/actionsPage',
    './elementsPage',
    './propertiesPage',
    'require'
], function(utils,actions,elements,properties,require){
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
                    return actions.clickButton(session, elements.INSTA_LOGIN_LINK_LOCATOR, 'xpath');
                })
                .then(function() {
                    return actions.enterText(session, elements.INSTA_USERNAME_LOCATOR, properties.INSTA_USERNAME, 'xpath');
                })
                .then(function(){
                    return actions.enterText(session, elements.INSTA_PW_LOCATOR, properties.INSTA_PW, 'xpath');
                })
                .then(function() {
                    return actions.clickButton(session, elements.INSTA_LOGIN_BTN_LOCATOR, 'xpath')
                })
        }
    }; return instagramLoginPage;
});