/**
 * Created by brendon.kelley on 5/20/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './elementsPage',
    './propertiesPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,elements,properties,pollUntil,require,results) {
    function uploadInstagramFailPage(remote){
        this.remote=remote;
    }


    uploadInstagramFailPage.prototype={
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
                .findByXpath(elements.UPLOAD_INSTA_CONTENT_PHOTO)
                .click()
                .sleep(2000)
                .end()
                .findByXpath(elements.UPLOAD_PHOTO_COMMENT_LOCATOR)
                .click()
                .type("this is great")
                .sleep(2000)
                .end()
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
                //.sleep(2000)
                .then(pollUntil('return document.getElementById("choose");', 10000))
                .end()
                .findByXpath(elements.UPLOAD_INSTA_CONTENT_PHOTO)
                .click()
                .sleep(2000)
                .end()
                .findByXpath(elements.UPLOAD_NICKNAME_LOCATOR)
                .click()
                .type("test")
                .sleep(2000)
                .end()
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()
        },

        uploadBoth: function(){
            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR)
                .click()
                .then(pollUntil('return document.getElementById("choose");', 10000))
                .end()
                .findByXpath(elements.UPLOAD_INSTA_CONTENT_PHOTO)
                .click()
                .sleep(2000)
                .end()
                .findByXpath(elements.UPLOAD_PHOTO_COMMENT_LOCATOR)
                .click()
                .type("this is great")
                .sleep(2000)
                .end()
                .findByXpath(elements.UPLOAD_NICKNAME_LOCATOR)
                .click()
                .type("test")
                .sleep(2000)
                .end()
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()

        },

        uploadCommentAgree: function(){
            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR)
                .click()
                .then(pollUntil('return document.getElementById("choose");', 10000))
                .end()
                .findByXpath(elements.UPLOAD_INSTA_CONTENT_PHOTO)
                .click()
                .sleep(2000)
                .end()
                .findByXpath(elements.UPLOAD_PHOTO_COMMENT_LOCATOR)
                .click()
                .type("this is great")
                .sleep(2000)
                .end()
                .findById(elements.UPLOAD_TC_ID)
                .click()
                .sleep(1000)
                .end()
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()

        }


    }; return uploadInstagramFailPage
});
