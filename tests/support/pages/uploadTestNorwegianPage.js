/**
 * Created by brendon.kelley on 6/8/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionNorwegianElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionNorwegianElements,pollUntil,require){
    function uploadTestNorwegianPage(remote){
        this.remote=remote;
    }

    uploadTestNorwegianPage.prototype={
        constructor: uploadTestNorwegianPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionNorwegianElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionNorwegianElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionNorwegianElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionNorwegianElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionNorwegianElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionNorwegianElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionNorwegianElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionNorwegianElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionNorwegianElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionNorwegianElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionNorwegianElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionNorwegianElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionNorwegianElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionNorwegianElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionNorwegianElements.COMMENT_TEXT)
                })
                .findByXpath(submissionNorwegianElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionNorwegianElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionNorwegianElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionNorwegianElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionNorwegianElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionNorwegianElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionNorwegianElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionNorwegianElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionNorwegianElements.SUBMISSION_URL)
        }


    }; return uploadTestNorwegianPage
});