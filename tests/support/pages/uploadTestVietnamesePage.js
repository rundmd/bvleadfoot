/**
 * Created by brendon.kelley on 6/9/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionVietnameseElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionVietnameseElements,pollUntil,require){
    function uploadTestVietnamesePage(remote){
        this.remote=remote;
    }

    uploadTestVietnamesePage.prototype={
        constructor: uploadTestVietnamesePage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionVietnameseElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionVietnameseElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionVietnameseElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionVietnameseElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionVietnameseElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionVietnameseElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionVietnameseElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionVietnameseElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionVietnameseElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionVietnameseElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionVietnameseElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionVietnameseElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionVietnameseElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionVietnameseElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionVietnameseElements.COMMENT_TEXT)
                })
                .findByXpath(submissionVietnameseElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionVietnameseElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionVietnameseElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionVietnameseElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionVietnameseElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionVietnameseElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionVietnameseElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionVietnameseElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionVietnameseElements.SUBMISSION_URL)
        }


    }; return uploadTestVietnamesePage
});