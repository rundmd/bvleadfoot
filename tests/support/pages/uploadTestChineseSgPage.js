/**
 * Created by brendon.kelley on 6/10/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionChineseSgElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionChineseSgElements,pollUntil,require){
    function uploadTestChineseSgPage(remote){
        this.remote=remote;
    }

    uploadTestChineseSgPage.prototype={
        constructor: uploadTestChineseSgPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionChineseSgElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionChineseSgElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseSgElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionChineseSgElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseSgElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionChineseSgElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseSgElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionChineseSgElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseSgElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionChineseSgElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseSgElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionChineseSgElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionChineseSgElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionChineseSgElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionChineseSgElements.COMMENT_TEXT)
                })
                .findByXpath(submissionChineseSgElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionChineseSgElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionChineseSgElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseSgElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionChineseSgElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseSgElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionChineseSgElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseSgElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionChineseSgElements.SUBMISSION_URL)
        }


    }; return uploadTestChineseSgPage
});