/**
 * Created by brendon.kelley on 6/9/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionSerbianElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionSerbianElements,pollUntil,require){
    function uploadTestSerbianPage(remote){
        this.remote=remote;
    }

    uploadTestSerbianPage.prototype={
        constructor: uploadTestSerbianPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionSerbianElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionSerbianElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSerbianElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionSerbianElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSerbianElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionSerbianElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSerbianElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionSerbianElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSerbianElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionSerbianElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSerbianElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionSerbianElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionSerbianElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionSerbianElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionSerbianElements.COMMENT_TEXT)
                })
                .findByXpath(submissionSerbianElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionSerbianElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionSerbianElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSerbianElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionSerbianElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSerbianElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionSerbianElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSerbianElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionSerbianElements.SUBMISSION_URL)
        }


    }; return uploadTestSerbianPage
});