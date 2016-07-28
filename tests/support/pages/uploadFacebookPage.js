/**
 * Created by brendon.kelley on 5/26/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,pollUntil,require){
    function uploadFacebookPage(remote){
        this.remote=remote;
    }

    uploadFacebookPage.prototype={
        constructor: uploadFacebookPage,

        upload: function(){

            var session=this.remote;

            return session
                .get(properties.SUBMISSION_URL)
                .findByXpath(elements.UPLOAD_FB_BTN_LOCATOR)
                    .click()
                    .then(pollUntil('return document.getElementById("choose");', 10000))
                    .end()
                .then(function(){
                    return shared.clickAButton(session,elements.UPLOAD_FB_CONTENT_PHOTO,'xpath');
                })
                .then(function (){
                    return utils.fillUploadForm(session,"fb");
                })
                .then(function(){
                    return shared.getText(session,'//*[@id="thanks"]/div[2]/div[2]/div/div/div/p','xpath');
                })
        }
    }; return uploadFacebookPage;
});