/**
 * Created by brendon.kelley on 6/7/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionItalianElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionItalianElements,pollUntil,require){
    function uploadTestItalianPage(remote){
        this.remote=remote;
    }

    uploadTestItalianPage.prototype={
        constructor: uploadTestItalianPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionItalianElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionItalianElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionItalianElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionItalianElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionItalianElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionItalianElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionItalianElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionItalianElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionItalianElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionItalianElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionItalianElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionItalianElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionItalianElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionItalianElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionItalianElements.COMMENT_TEXT)
                })
                .findByXpath(submissionItalianElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionItalianElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionItalianElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionItalianElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionItalianElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionItalianElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionItalianElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionItalianElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionItalianElements.SUBMISSION_URL)
        }


    }; return uploadTestItalianPage
});