/**
 * Created by brendon.kelley on 6/6/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    './submissionGermanElements',
    './testPropertiesPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,submissionGermanElements,testProp,pollUntil,require){
        function uploadTestGermanPage(remote){
            this.remote=remote;
        }

    uploadTestGermanPage.prototype={
        constructor: uploadTestGermanPage,

        checkButtonsText: function(){
            var session=this.remote;

            return session
                .setFindTimeout(10000)
                .get(submissionGermanElements.SUBMISSION_URL)
                .sleep(2000)
                .findByXpath(submissionGermanElements.UPLOAD_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGermanElements.UPLOAD_PHOTO_TEXT)
                })
                .findByXpath(submissionGermanElements.TAKE_PHOTO_LOCATOR)
                .getProperty("innerText").then(function(results){
                assert.equal(results, submissionGermanElements.TAKE_PHOTO_TEXT)
                })
                .findByXpath(submissionGermanElements.UPLOAD_VIDEO_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGermanElements.UPLOAD_VIDEO_TEXT)
                })
                .findByXpath(submissionGermanElements.UPLOAD_FB_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGermanElements.UPLOAD_FACEBOOK_TEXT)
                })
                .findByXpath(submissionGermanElements.UPLOAD_INSTA_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGermanElements.UPLOAD_INSTA_TEXT)
                })
        },

        uploadPhoto: function(){
            var session=this.remote;
            return session
                .get(submissionGermanElements.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(submissionGermanElements.UPLOAD_PHOTO_ID)
                    .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                    .end()
                .findByXpath(submissionGermanElements.COMMENT_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGermanElements.COMMENT_TEXT)
                })
                .findByXpath(submissionGermanElements.NICKNAME_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGermanElements.NICKNAME_TEXT)
                })
                .findByXpath(submissionGermanElements.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGermanElements.RIGHTS_MANG_TEXT)
                })
                .findByXpath(submissionGermanElements.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGermanElements.POST_BTN_TEXT)
                })
                .findByXpath(submissionGermanElements.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, submissionGermanElements.BACK_BTN_TEXT)
                })
        },
        
        uploadPhoto1: function(l)
        {
            var session=this.remote;
            var it=l;
            return session
                .get(testProp.SUBMISSION_URL)
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(testProp.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(testProp.COMMENT_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, testProplang.lang.it.COMMENT_TEXT)
                })
                .findByXpath(testProp.NICKNAME_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, testProplang.lang.it.NICKNAME_TEXT)
                })
                .findByXpath(testProp.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, testProplang.lang.it.RIGHTS_MANG_TEXT)
                })
                .findByXpath(testProp.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, testProplang.lang.it.POST_BTN_TEXT)
                })
                .findByXpath(testProp.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, testProplang.lang.it.BACK_BTN_TEXT)
                })
        },

        uploadVideo: function(){
            var session=this.remote;
            return session
                .get(submissionGermanElements.SUBMISSION_URL)
        }


    }; return uploadTestGermanPage
});