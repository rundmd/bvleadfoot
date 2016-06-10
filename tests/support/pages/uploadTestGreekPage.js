/**
 * Created by brendon.kelley on 6/6/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionGreekElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionGreekElements,pollUntil,require){
    function uploadTestGreekPage(remote){
        this.remote=remote;
    }

    uploadTestGreekPage.prototype={
        constructor: uploadTestGreekPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionGreekElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionGreekElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGreekElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionGreekElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGreekElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionGreekElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGreekElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionGreekElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGreekElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionGreekElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGreekElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionGreekElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionGreekElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionGreekElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionGreekElements.COMMENT_TEXT)
                })
                .findByXpath(submissionGreekElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionGreekElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionGreekElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGreekElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionGreekElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGreekElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionGreekElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGreekElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionGreekElements.SUBMISSION_URL)
        }


    }; return uploadTestGreekPage
});