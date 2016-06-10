/**
 * Created by brendon.kelley on 6/8/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionDutchElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionDutchElements,pollUntil,require){
    function uploadTestDutchPage(remote){
        this.remote=remote;
    }

    uploadTestDutchPage.prototype={
        constructor: uploadTestDutchPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionDutchElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionDutchElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDutchElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionDutchElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDutchElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionDutchElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDutchElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionDutchElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDutchElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionDutchElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDutchElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionDutchElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionDutchElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionDutchElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionDutchElements.COMMENT_TEXT)
                })
                .findByXpath(submissionDutchElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionDutchElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionDutchElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDutchElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionDutchElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDutchElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionDutchElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionDutchElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionDutchElements.SUBMISSION_URL)
        }


    }; return uploadTestDutchPage
});