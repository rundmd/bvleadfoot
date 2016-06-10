/**
 * Created by brendon.kelley on 6/8/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionRussianElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionRussianElements,pollUntil,require){
    function uploadTestRussianPage(remote){
        this.remote=remote;
    }

    uploadTestRussianPage.prototype={
        constructor: uploadTestRussianPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionRussianElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionRussianElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRussianElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionRussianElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRussianElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionRussianElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRussianElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionRussianElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRussianElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionRussianElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRussianElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionRussianElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionRussianElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionRussianElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionRussianElements.COMMENT_TEXT)
                })
                .findByXpath(submissionRussianElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionRussianElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionRussianElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRussianElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionRussianElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRussianElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionRussianElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRussianElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionRussianElements.SUBMISSION_URL)
        }


    }; return uploadTestRussianPage
});