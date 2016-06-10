/**
 * Created by brendon.kelley on 6/7/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionLithuanianElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionLithuanianElements,pollUntil,require){
    function uploadTestLithuanianPage(remote){
        this.remote=remote;
    }

    uploadTestLithuanianPage.prototype={
        constructor: uploadTestLithuanianPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionLithuanianElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionLithuanianElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLithuanianElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionLithuanianElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLithuanianElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionLithuanianElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLithuanianElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionLithuanianElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLithuanianElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionLithuanianElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLithuanianElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionLithuanianElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionLithuanianElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionLithuanianElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionLithuanianElements.COMMENT_TEXT)
                })
                .findByXpath(submissionLithuanianElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionLithuanianElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionLithuanianElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLithuanianElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionLithuanianElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLithuanianElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionLithuanianElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLithuanianElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionLithuanianElements.SUBMISSION_URL)
        }


    }; return uploadTestLithuanianPage
});