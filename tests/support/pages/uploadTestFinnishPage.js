/**
 * Created by brendon.kelley on 6/7/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionFinnishElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionFinnishElements,pollUntil,require){
    function uploadTestFinnishPage(remote){
        this.remote=remote;
    }

    uploadTestFinnishPage.prototype={
        constructor: uploadTestFinnishPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionFinnishElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionFinnishElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFinnishElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionFinnishElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFinnishElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionFinnishElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFinnishElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionFinnishElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFinnishElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionFinnishElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFinnishElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionFinnishElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionFinnishElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionFinnishElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionFinnishElements.COMMENT_TEXT)
                })
                .findByXpath(submissionFinnishElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionFinnishElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionFinnishElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFinnishElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionFinnishElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFinnishElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionFinnishElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFinnishElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionFinnishElements.SUBMISSION_URL)
        }


    }; return uploadTestFinnishPage
});