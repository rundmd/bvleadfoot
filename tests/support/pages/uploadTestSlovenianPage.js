/**
 * Created by brendon.kelley on 6/9/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionSlovenianElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionSlovenianElements,pollUntil,require){
    function uploadTestSlovenianPage(remote){
        this.remote=remote;
    }

    uploadTestSlovenianPage.prototype={
        constructor: uploadTestSlovenianPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionSlovenianElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionSlovenianElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovenianElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionSlovenianElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovenianElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionSlovenianElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovenianElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionSlovenianElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovenianElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionSlovenianElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovenianElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionSlovenianElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionSlovenianElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionSlovenianElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionSlovenianElements.COMMENT_TEXT)
                })
                .findByXpath(submissionSlovenianElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionSlovenianElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionSlovenianElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovenianElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionSlovenianElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovenianElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionSlovenianElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovenianElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionSlovenianElements.SUBMISSION_URL)
        }


    }; return uploadTestSlovenianPage
});