/**
 * Created by brendon.kelley on 5/26/16.
 * commoms/
 */
define([
    '../utils',
    './common/actionsPage',
    './elementsPage',
    './propertiesPage',
    'require'
], function(utils,actions,elements,properties,require){
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
                .sleep(2000)
                .then(function(){
                    return actions.enterText(session,elements.FB_EMAIL_LOCATOR,properties.FACEBOOK_EMAIL,'xpath');
                })
                .then(function(){
                    return actions.enterText(session,elements.FB_PASSWORD_LOCATOR,properties.FACEBOOK_PW,'xpath');
                })
                .then(function(){
                    return actions.clickButton(session,elements.FB_LOGIN_BTN_LOCATOR,'xpath');
                })
        }
    }; return facebookLoginPage;
});