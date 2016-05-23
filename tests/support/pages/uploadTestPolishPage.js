/**
 * Created by brendon.kelley on 6/8/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionPolishElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionPolishElements,pollUntil,require){
    function uploadTestPolishPage(remote){
        this.remote=remote;
    }

    uploadTestPolishPage.prototype={
        constructor: uploadTestPolishPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionPolishElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionPolishElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPolishElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionPolishElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPolishElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionPolishElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPolishElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionPolishElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPolishElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionPolishElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPolishElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionPolishElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionPolishElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionPolishElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionPolishElements.COMMENT_TEXT)
                })
                .findByXpath(submissionPolishElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionPolishElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionPolishElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPolishElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionPolishElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPolishElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionPolishElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPolishElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionPolishElements.SUBMISSION_URL)
        }


    }; return uploadTestPolishPage
});