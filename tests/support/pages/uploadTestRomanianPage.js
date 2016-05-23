/**
 * Created by brendon.kelley on 6/8/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionRomanianElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionRomanianElements,pollUntil,require){
    function uploadTestRomanianPage(remote){
        this.remote=remote;
    }

    uploadTestRomanianPage.prototype={
        constructor: uploadTestRomanianPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionRomanianElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionRomanianElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRomanianElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionRomanianElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRomanianElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionRomanianElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRomanianElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionRomanianElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRomanianElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionRomanianElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRomanianElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionRomanianElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionRomanianElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionRomanianElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionRomanianElements.COMMENT_TEXT)
                })
                .findByXpath(submissionRomanianElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionRomanianElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionRomanianElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRomanianElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionRomanianElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRomanianElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionRomanianElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionRomanianElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionRomanianElements.SUBMISSION_URL)
        }


    }; return uploadTestRomanianPage
});