/**
 * Created by brendon.kelley on 5/20/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    '../sharedFunctions',
    './elementsPage',
    './propertiesPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,shared,elements,properties,pollUntil,require,results) {
    function uploadInstagramFailPage(remote){
        this.remote=remote;
    }


    uploadInstagramFailPage.prototype= {
        constructor: uploadInstagramFailPage,

        uploadPlusComment:function()
        {
            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR)
                    .click()
                    .then(pollUntil('return document.getElementById("choose");', 10000))
                    .end()
                .then(function(){
                    return shared.clickAButton(session,elements.UPLOAD_INSTA_CONTENT_PHOTO, 'xpath');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_PHOTO_COMMENT_LOCATOR,"this is great", 'xpath');
                })
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()
            

        },

        uploadPlusNickname: function () {

            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR)
                    .click()
                    .then(pollUntil('return document.getElementById("choose");', 10000))
                    .end()
                .then(function(){
                    return shared.clickAButton(session,elements.UPLOAD_INSTA_CONTENT_PHOTO, 'xpath');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_NICKNAME_LOCATOR,"test", 'xpath');
                })
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()
        },

        uploadBoth: function () {
            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR)
                    .click()
                    .then(pollUntil('return document.getElementById("choose");', 10000))
                    .end()
                .then(function(){
                    return shared.clickAButton(session,elements.UPLOAD_INSTA_CONTENT_PHOTO, 'xpath');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_PHOTO_COMMENT_LOCATOR,"this is great", 'xpath');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_NICKNAME_LOCATOR, "test",'xpath');
                })
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()

        },

        uploadCommentAgree: function () {
            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR)
                .click()
                .then(pollUntil('return document.getElementById("choose");', 10000))
                .end()
                .then(function(){
                    return shared.clickAButton(session,elements.UPLOAD_INSTA_CONTENT_PHOTO, 'xpath');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_PHOTO_COMMENT_LOCATOR,"this is great", 'xpath');
                })
                .then(function(){
                    return shared.clickAButton(session,elements.UPLOAD_TC_ID, 'id');
                })
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()
        }
    }; return uploadInstagramFailPage
});
