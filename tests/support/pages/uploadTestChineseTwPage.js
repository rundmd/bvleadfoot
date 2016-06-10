/**
 * Created by brendon.kelley on 6/10/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionChineseTwElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionChineseTwElements,pollUntil,require){
    function uploadTestChineseTwPage(remote){
        this.remote=remote;
    }

    uploadTestChineseTwPage.prototype={
        constructor: uploadTestChineseTwPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionChineseTwElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionChineseTwElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseTwElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionChineseTwElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseTwElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionChineseTwElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseTwElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionChineseTwElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseTwElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionChineseTwElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseTwElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionChineseTwElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionChineseTwElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionChineseTwElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionChineseTwElements.COMMENT_TEXT)
                })
                .findByXpath(submissionChineseTwElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionChineseTwElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionChineseTwElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseTwElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionChineseTwElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseTwElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionChineseTwElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseTwElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionChineseTwElements.SUBMISSION_URL)
        }


    }; return uploadTestChineseTwPage
});