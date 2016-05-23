/**
 * Created by brendon.kelley on 6/7/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionIndonesianElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionIndonesianElements,pollUntil,require){
    function uploadTestIndonesianPage(remote){
        this.remote=remote;
    }

    uploadTestIndonesianPage.prototype={
        constructor: uploadTestIndonesianPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionIndonesianElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionIndonesianElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIndonesianElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionIndonesianElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIndonesianElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionIndonesianElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIndonesianElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionIndonesianElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIndonesianElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionIndonesianElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIndonesianElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionIndonesianElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionIndonesianElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionIndonesianElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionIndonesianElements.COMMENT_TEXT)
                })
                .findByXpath(submissionIndonesianElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionIndonesianElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionIndonesianElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIndonesianElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionIndonesianElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIndonesianElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionIndonesianElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIndonesianElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionIndonesianElements.SUBMISSION_URL)
        }


    }; return uploadTestIndonesianPage
});