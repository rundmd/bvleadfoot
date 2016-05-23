/**
 * Created by brendon.kelley on 6/6/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionDanishElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionDanishElements,pollUntil,require){
    function uploadTestDanishPage(remote){
        this.remote=remote;
    }

    uploadTestDanishPage.prototype={
        constructor: uploadTestDanishPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionDanishElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionDanishElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDanishElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionDanishElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDanishElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionDanishElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDanishElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionDanishElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDanishElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionDanishElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDanishElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionDanishElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionDanishElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionDanishElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionDanishElements.COMMENT_TEXT)
                })
                .findByXpath(submissionDanishElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionDanishElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionDanishElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDanishElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionDanishElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDanishElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionDanishElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDanishElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionDanishElements.SUBMISSION_URL)
        }


    }; return uploadTestDanishPage
});