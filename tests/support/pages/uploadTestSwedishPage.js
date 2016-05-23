/**
 * Created by brendon.kelley on 6/9/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionSwedishElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionSwedishElements,pollUntil,require){
    function uploadTestSwedishPage(remote){
        this.remote=remote;
    }

    uploadTestSwedishPage.prototype={
        constructor: uploadTestSwedishPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionSwedishElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionSwedishElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSwedishElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionSwedishElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSwedishElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionSwedishElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSwedishElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionSwedishElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSwedishElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionSwedishElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSwedishElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionSwedishElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionSwedishElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionSwedishElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionSwedishElements.COMMENT_TEXT)
                })
                .findByXpath(submissionSwedishElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionSwedishElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionSwedishElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSwedishElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionSwedishElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSwedishElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionSwedishElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionSwedishElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionSwedishElements.SUBMISSION_URL)
        }


    }; return uploadTestSwedishPage
});