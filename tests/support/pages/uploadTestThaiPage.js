/**
 * Created by brendon.kelley on 6/9/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionThaiElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionThaiElements,pollUntil,require){
    function uploadTestThaiPage(remote){
        this.remote=remote;
    }

    uploadTestThaiPage.prototype={
        constructor: uploadTestThaiPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionThaiElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionThaiElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionThaiElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionThaiElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionThaiElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionThaiElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionThaiElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionThaiElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionThaiElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionThaiElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionThaiElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionThaiElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionThaiElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionThaiElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionThaiElements.COMMENT_TEXT)
                })
                .findByXpath(submissionThaiElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionThaiElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionThaiElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionThaiElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionThaiElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionThaiElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionThaiElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionThaiElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionThaiElements.SUBMISSION_URL)
        }


    }; return uploadTestThaiPage
});