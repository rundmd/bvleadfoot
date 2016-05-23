/**
 * Created by brendon.kelley on 6/6/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionEstonianElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionEstonianElements,pollUntil,require){
    function uploadTestEstonianPage(remote){
        this.remote=remote;
    }

    uploadTestEstonianPage.prototype={
        constructor: uploadTestEstonianPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionEstonianElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionEstonianElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionEstonianElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionEstonianElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionEstonianElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionEstonianElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionEstonianElementsUPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionEstonianElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionEstonianElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionEstonianElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionEstonianElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionEstonianElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionEstonianElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionEstonianElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionEstonianElements.COMMENT_TEXT)
                })
                .findByXpath(submissionEstonianElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionEstonianElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionEstonianElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionEstonianElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionEstonianElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionEstonianElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionEstonianElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionEstonianElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionEstonianElements.SUBMISSION_URL)
        }


    }; return uploadTestEstonianPage
});