/**
 * Created by brendon.kelley on 6/7/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionHungarianElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionHungarianElements,pollUntil,require){
    function uploadTestHungarianPage(remote){
        this.remote=remote;
    }

    uploadTestHungarianPage.prototype={
        constructor: uploadTestHungarianPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionHungarianElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionHungarianElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionHungarianElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionHungarianElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionHungarianElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionHungarianElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionHungarianElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionHungarianElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionHungarianElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionHungarianElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionHungarianElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionHungarianElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionHungarianElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionHungarianElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionHungarianElements.COMMENT_TEXT)
                })
                .findByXpath(submissionHungarianElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionHungarianElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionHungarianElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionHungarianElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionHungarianElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionHungarianElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionHungarianElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionHungarianElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionHungarianElements.SUBMISSION_URL)
        }


    }; return uploadTestHungarianPage
});