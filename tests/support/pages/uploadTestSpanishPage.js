/**
 * Created by brendon.kelley on 6/6/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionSpanishElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionSpanishElements,pollUntil,require){
    function uploadTestSpanishPage(remote){
        this.remote=remote;
    }

    uploadTestSpanishPage.prototype={
        constructor: uploadTestSpanishPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionSpanishElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionSpanishElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSpanishElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionSpanishElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSpanishElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionSpanishElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSpanishElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionSpanishElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSpanishElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionSpanishElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSpanishElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionSpanishElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionSpanishElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionSpanishElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionSpanishElements.COMMENT_TEXT)
                })
                .findByXpath(submissionSpanishElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionSpanishElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionSpanishElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSpanishElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionSpanishElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSpanishElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionSpanishElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSpanishElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionSpanishElements.SUBMISSION_URL)
        }


    }; return uploadTestSpanishPage
});