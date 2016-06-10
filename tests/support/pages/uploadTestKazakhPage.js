/**
 * Created by brendon.kelley on 6/7/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionKazakhElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionKazakhElements,pollUntil,require){
    function uploadTestKazakhPage(remote){
        this.remote=remote;
    }

    uploadTestKazakhPage.prototype={
        constructor: uploadTestKazakhPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionKazakhElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionKazakhElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKazakhElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionKazakhElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKazakhElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionKazakhElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKazakhElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionKazakhElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKazakhElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionKazakhElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKazakhElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionKazakhElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionKazakhElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionKazakhElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionKazakhElements.COMMENT_TEXT)
                })
                .findByXpath(submissionKazakhElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionKazakhElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionKazakhElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKazakhElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionKazakhElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKazakhElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionKazakhElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionKazakhElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionKazakhElements.SUBMISSION_URL)
        }


    }; return uploadTestKazakhPage
});