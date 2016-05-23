/**
 * Created by brendon.kelley on 6/7/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionCroatianElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionCroatianElements,pollUntil,require){
    function uploadTestCroatianPage(remote){
        this.remote=remote;
    }

    uploadTestCroatianPage.prototype={
        constructor: uploadTestCroatianPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionCroatianElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionCroatianElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCroatianElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionCroatianElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCroatianElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionCroatianElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCroatianElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionCroatianElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCroatianElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionCroatianElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCroatianElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionCroatianElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionCroatianElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionCroatianElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionCroatianElements.COMMENT_TEXT)
                })
                .findByXpath(submissionCroatianElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionCroatianElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionCroatianElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCroatianElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionCroatianElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCroatianElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionCroatianElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionCroatianElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionCroatianElements.SUBMISSION_URL)
        }


    }; return uploadTestCroatianPage
});