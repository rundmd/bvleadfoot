define([
    'intern/chai!assert',
    '../utils',
    '../sharedFunctions',
    './propertiesPage',
    './elementsPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,shared,properties,elements,pollUntil,require){
    function uploadInstagramPage(remote){
        this.remote=remote;
    }

    uploadInstagramPage.prototype={
        constructor: uploadInstagramPage,

        upload: function(){

            var session=this.remote;

            return session
            .get(properties.SUBMISSION_URL)
            .setFindTimeout(10000)
            .findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR)
            .click()
            .then(pollUntil('return document.getElementById("choose");', 10000))
            .end()

            .then(function(){
                return shared.clickAButton(session,elements.UPLOAD_INSTA_CONTENT_PHOTO,'xpath');
            })
            .then(function (){
                return utils.fillUploadForm(session,"insta");
            })
            .setFindTimeout(10000)
            .then(function(){
                return shared.getText(session, '//*[@id="thanks"]/div[2]/div[2]/div/div/div/p', 'xpath');
            })
        }
    }; return uploadInstagramPage;
});


