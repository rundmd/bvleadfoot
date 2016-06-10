/**
 * Created by brendon.kelley on 6/9/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionUkrainianElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionUkrainianElements,pollUntil,require){
    function uploadTestUkrainianPage(remote){
        this.remote=remote;
    }

    uploadTestUkrainianPage.prototype={
        constructor: uploadTestUkrainianPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionUkrainianElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionUkrainianElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionUkrainianElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionUkrainianElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionUkrainianElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionUkrainianElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionUkrainianElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionUkrainianElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionUkrainianElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionUkrainianElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionUkrainianElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionUkrainianElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionUkrainianElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionUkrainianElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionUkrainianElements.COMMENT_TEXT)
                })
                .findByXpath(submissionUkrainianElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionUkrainianElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionUkrainianElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionUkrainianElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionUkrainianElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionUkrainianElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionUkrainianElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionUkrainianElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionUkrainianElements.SUBMISSION_URL)
        }


    }; return uploadTestUkrainianPage
});