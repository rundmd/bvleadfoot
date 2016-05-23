/**
 * Created by brendon.kelley on 6/9/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionTurkishElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionTurkishElements,pollUntil,require){
    function uploadTestTurkishPage(remote){
        this.remote=remote;
    }

    uploadTestTurkishPage.prototype={
        constructor: uploadTestTurkishPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionTurkishElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionTurkishElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionTurkishElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionTurkishElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionTurkishElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionTurkishElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionTurkishElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionTurkishElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionTurkishElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionTurkishElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionTurkishElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionTurkishElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionTurkishElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionTurkishElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionTurkishElements.COMMENT_TEXT)
                })
                .findByXpath(submissionTurkishElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionTurkishElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionTurkishElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionTurkishElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionTurkishElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionTurkishElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionTurkishElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionTurkishElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionTurkishElements.SUBMISSION_URL)
        }


    }; return uploadTestTurkishPage
});