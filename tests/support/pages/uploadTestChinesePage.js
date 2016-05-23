/**
 * Created by brendon.kelley on 6/10/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionChineseElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionChineseElements,pollUntil,require){
    function uploadTestChinesePage(remote){
        this.remote=remote;
    }

    uploadTestChinesePage.prototype={
        constructor: uploadTestChinesePage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionChineseElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionChineseElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionChineseElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionChineseElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionChineseElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionChineseElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionChineseElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionChineseElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionChineseElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionChineseElements.COMMENT_TEXT)
                })
                .findByXpath(submissionChineseElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionChineseElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionChineseElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionChineseElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionChineseElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionChineseElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionChineseElements.SUBMISSION_URL)
        }


    }; return uploadTestChinesePage
});