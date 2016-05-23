/**
 * Created by brendon.kelley on 6/8/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionPortugueseElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionPortugueseElements,pollUntil,require){
    function uploadTestPortuguesePage(remote){
        this.remote=remote;
    }

    uploadTestPortuguesePage.prototype={
        constructor: uploadTestPortuguesePage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionPortugueseElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionPortugueseElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionPortugueseElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionPortugueseElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionPortugueseElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionPortugueseElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionPortugueseElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionPortugueseElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionPortugueseElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionPortugueseElements.COMMENT_TEXT)
                })
                .findByXpath(submissionPortugueseElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionPortugueseElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionPortugueseElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionPortugueseElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionPortugueseElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionPortugueseElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionPortugueseElements.SUBMISSION_URL)
        }


    }; return uploadTestPortuguesePage
});