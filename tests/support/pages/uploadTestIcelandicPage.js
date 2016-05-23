/**
 * Created by brendon.kelley on 6/7/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionIcelandicElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionIcelandicElements,pollUntil,require){
    function uploadTestIcelandicPage(remote){
        this.remote=remote;
    }

    uploadTestIcelandicPage.prototype={
        constructor: uploadTestIcelandicPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionIcelandicElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionIcelandicElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIcelandicElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionIcelandicElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIcelandicElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionIcelandicElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIcelandicElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionIcelandicElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIcelandicElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionIcelandicElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIcelandicElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionIcelandicElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionIcelandicElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionIcelandicElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionIcelandicElements.COMMENT_TEXT)
                })
                .findByXpath(submissionIcelandicElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionIcelandicElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionIcelandicElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIcelandicElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionIcelandicElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIcelandicElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionIcelandicElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionIcelandicElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionIcelandicElements.SUBMISSION_URL)
        }


    }; return uploadTestIcelandicPage
});