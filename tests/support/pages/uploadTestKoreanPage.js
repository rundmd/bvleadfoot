/**
 * Created by brendon.kelley on 6/7/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionKoreanElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionKoreanElements,pollUntil,require){
    function uploadTestKoreanPage(remote){
        this.remote=remote;
    }

    uploadTestKoreanPage.prototype={
        constructor: uploadTestKoreanPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionKoreanElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionKoreanElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKoreanElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionKoreanElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKoreanElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionKoreanElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKoreanElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionKoreanElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKoreanElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionKoreanElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKoreanElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionKoreanElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionKoreanElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionKoreanElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionKoreanElements.COMMENT_TEXT)
                })
                .findByXpath(submissionKoreanElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionKoreanElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionKoreanElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKoreanElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionKoreanElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKoreanElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionKoreanElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKoreanElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionKoreanElements.SUBMISSION_URL)
        }


    }; return uploadTestKoreanPage
});