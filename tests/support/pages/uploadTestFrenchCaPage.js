/**
 * Created by brendon.kelley on 6/7/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionFrenchCaElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionFrenchCaElements,pollUntil,require){
    function uploadTestFrenchCaPage(remote){
        this.remote=remote;
    }

    uploadTestFrenchCaPage.prototype={
        constructor: uploadTestFrenchCaPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionFrenchCaElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionFrenchCaElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchCaElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionFrenchCaElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchCaElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionFrenchCaElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchCaElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionFrenchCaElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchCaElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionFrenchCaElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchCaElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionFrenchCaElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionFrenchCaElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionFrenchCaElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionFrenchCaElements.COMMENT_TEXT)
                })
                .findByXpath(submissionFrenchCaElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionFrenchCaElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionFrenchCaElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchCaElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionFrenchCaElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchCaElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionFrenchCaElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionFrenchCaElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionFrenchCaElements.SUBMISSION_URL)
        }


    }; return uploadTestFrenchCaPage
});