/**
 * Created by brendon.kelley on 6/7/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionFrenchElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionFrenchElements,pollUntil,require){
    function uploadTestFrenchPage(remote){
        this.remote=remote;
    }

    uploadTestFrenchPage.prototype={
        constructor: uploadTestFrenchPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionFrenchElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionFrenchElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionFrenchElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionFrenchElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionFrenchElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionFrenchElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionFrenchElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionFrenchElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionFrenchElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionFrenchElements.COMMENT_TEXT)
                })
                .findByXpath(submissionFrenchElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionFrenchElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionFrenchElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionFrenchElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionFrenchElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionFrenchElements.SUBMISSION_URL)
        }


    }; return uploadTestFrenchPage
});