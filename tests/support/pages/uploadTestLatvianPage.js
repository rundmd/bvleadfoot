/**
 * Created by brendon.kelley on 6/8/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionLatvianElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionLatvianElements,pollUntil,require){
    function uploadTestLatvianPage(remote){
        this.remote=remote;
    }

    uploadTestLatvianPage.prototype={
        constructor: uploadTestLatvianPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionLatvianElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionLatvianElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLatvianElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionLatvianElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLatvianElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionLatvianElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLatvianElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionLatvianElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLatvianElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionLatvianElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLatvianElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionLatvianElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionLatvianElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionLatvianElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionLithuanianElements.COMMENT_TEXT)
                })
                .findByXpath(submissionLatvianElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionLatvianElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionLatvianElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLatvianElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionLatvianElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLatvianElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionLatvianElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionLatvianElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionLatvianElements.SUBMISSION_URL)
        }


    }; return uploadTestLatvianPage
});