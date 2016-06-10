/**
 * Created by brendon.kelley on 6/7/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionJapaneseElements',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionJapaneseElements,pollUntil,require){
    function uploadTestJapanesePage(remote){
        this.remote=remote;
    }

    uploadTestJapanesePage.prototype={
        constructor: uploadTestJapanesePage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionJapaneseElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionJapaneseElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionJapaneseElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionJapaneseElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionJapaneseElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionJapaneseElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionJapaneseElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionJapaneseElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionJapaneseElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionJapaneseElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionJapaneseElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionJapaneseElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionJapaneseElements.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(submissionJapaneseElements.COMMENT_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionJapaneseElements.COMMENT_TEXT)
                })
                .findByXpath(submissionJapaneseElements.NICKNAME_LOCATOR)
                .getProperty("placeholder").then(function(results){
                    assert.equal(results, submissionJapaneseElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionJapaneseElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionJapaneseElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionJapaneseElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionJapaneseElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionJapaneseElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionJapaneseElements.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionJapaneseElements.SUBMISSION_URL)
        }


    }; return uploadTestJapanesePage
});