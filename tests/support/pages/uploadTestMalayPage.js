/**
 * Created by brendon.kelley on 6/8/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionMalayElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionMalayElements,pollUntil,require){
    function uploadTestMalayPage(remote){
        this.remote=remote;
    }

    uploadTestMalayPage.prototype={
        constructor: uploadTestMalayPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionMalayElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionMalayElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionMalayElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionMalayElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionMalayElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionMalayElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionMalayElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionMalayElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionMalayElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionMalayElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionMalayElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionMalayElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionMalayElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionMalayElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionMalayElements.COMMENT_TEXT)
                })
                .findByXpath(submissionMalayElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionMalayElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionMalayElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionMalayElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionMalayElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionMalayElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionMalayElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionMalayElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionMalayElements.SUBMISSION_URL)
        }


    }; return uploadTestMalayPage
});