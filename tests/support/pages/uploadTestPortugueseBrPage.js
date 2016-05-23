/**
 * Created by brendon.kelley on 6/8/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionPortugueseBrElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionPortugueseBrElements,pollUntil,require){
    function uploadTestPortugueseBrPage(remote){
        this.remote=remote;
    }

    uploadTestPortugueseBrPage.prototype={
        constructor: uploadTestPortugueseBrPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionPortugueseBrElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionPortugueseBrElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseBrElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionPortugueseBrElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseBrElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionPortugueseBrElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseBrElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionPortugueseBrElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseBrElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionPortugueseBrElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseBrElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionPortugueseBrElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionPortugueseBrElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionPortugueseBrElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionPortugueseBrElements.COMMENT_TEXT)
                })
                .findByXpath(submissionPortugueseBrElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionPortugueseBrElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionPortugueseBrElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseBrElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionPortugueseBrElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseBrElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionPortugueseBrElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseBrElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionPortugueseBrElements.SUBMISSION_URL)
        }


    }; return uploadTestPortugueseBrPage
});