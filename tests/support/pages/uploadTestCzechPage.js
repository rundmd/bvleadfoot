/**
 * Created by brendon.kelley on 6/6/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionCzechElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionCzechElements,pollUntil,require){
    function uploadTestCzechPage(remote){
        this.remote=remote;
    }

    uploadTestCzechPage.prototype={
        constructor: uploadTesCzechPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionCzechElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionCzechElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCzechElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionCzechElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCzechElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionCzechElementsUPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCzechElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionCzechElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCzechElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionCzechElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCzechElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionCzechElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionCzechElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionCzechElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionCzechElements.COMMENT_TEXT)
                })
                .findByXpath(submissionCzechElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionCzechElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionCzechElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCzechElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionCzechElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCzechElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionCzechElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCzechElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionCzechElements.SUBMISSION_URL)
        }


    }; return uploadTestCzechPage
});