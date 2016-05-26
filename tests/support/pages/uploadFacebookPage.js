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
                //.setFindTimeout(10000)
                //.then(pollUntil((window.document.readyState=='complete'), 5000))
                .findByXpath(elements.UPLOAD_FB_BTN_LOCATOR)
                .click()
                //.sleep(2000)
                //.then(pollUntil('return document.getElementById("choose");', 10000))
                .end()
                .findByXpath(elements.UPLOAD_INSTA_CONTENT_PHOTO)
                .click()
                .sleep(2000)
                .end()
                .then(function (){
                    return utils.fillUploadFormTest(session,"fb");
                })
                .setFindTimeout(10000)
                .findByXpath('//*[@id="thanks"]/div[2]/div[2]/div/div/div/p')
                .getVisibleText()

        }
    }; return uploadFacebookPage;
});