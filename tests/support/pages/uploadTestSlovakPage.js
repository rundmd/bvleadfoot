/**
 * Created by brendon.kelley on 6/8/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionSlovakElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionSlovakElements,pollUntil,require){
    function uploadTestSlovakPage(remote){
        this.remote=remote;
    }

    uploadTestSlovakPage.prototype={
        constructor: uploadTestSlovakPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionSlovakElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionSlovakElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovakElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionSlovakElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovakElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionSlovakElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovakElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionSlovakElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovakElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionSlovakElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovakElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionSlovakElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionSlovakElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionSlovakElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionSlovakElements.COMMENT_TEXT)
                })
                .findByXpath(submissionSlovakElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionSlovakElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionSlovakElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovakElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionSlovakElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovakElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionSlovakElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSlovakElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionSlovakElements.SUBMISSION_URL)
        }


    }; return uploadTestSlovakPage
});