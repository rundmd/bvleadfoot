/**
 * Created by brendon.kelley on 5/20/16.
 */
/**
 * Created by brendon.kelley on 5/20/16.
 */

define([
    'intern/chai!assert',
    '../utils',
    './elementsPage',
    './propertiesPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,elements,properties,pollUntil,require,results) {
    function uploadVideoFailPage(remote){
        this.remote=remote;
    }

    

    uploadVideoFailPage.prototype={
        constructor: uploadVideoFailPage,

        uploadPlusComment:function()
        {
            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .setFindTimeout(10000)
                .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR)
                .click()
                .sleep(2000)
                .end()
                .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR2)
                .type(require.toUrl('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/testvid.mp4'))
                .sleep(20000)
                .end()
                .findByXpath(elements.UPLOAD_VIDEO_COMMENT_LOCATOR)
                .click()
                .type("the greatest of all time")
                .sleep(1000)
                .end()
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()

        },

        uploadPlusNickname: function () {

            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .setFindTimeout(10000)
                .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR)
                .click()
                .sleep(2000)
                .end()
                .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR2)
                .type(require.toUrl('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/testvid.mp4'))
                .sleep(20000)
                .end()
                .findByXpath(elements.UPLOAD_VIDEO_NICKNAME_LOCATOR)
                .click()
                .type("bk")
                .end()
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()
        },

        uploadBoth: function(){
            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .setFindTimeout(10000)
                .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR)
                .click()
                .sleep(2000)
                .end()
                .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR2)
                .type(require.toUrl('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/testvid.mp4'))
                .sleep(20000)
                .end()
                .findByXpath(elements.UPLOAD_VIDEO_COMMENT_LOCATOR)
                .click()
                .type("the greatest of all time")
                .sleep(1000)
                .end()
                .findByXpath(elements.UPLOAD_VIDEO_NICKNAME_LOCATOR)
                .click()
                .type("bk")
                .end()
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()

        },

        uploadCommentAgree: function(){
            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .setFindTimeout(10000)
                .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR)
                .click()
                .sleep(2000)
                .end()
                .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR2)
                .type(require.toUrl('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/testvid.mp4'))
                .sleep(20000)
                .end()
                .findByXpath(elements.UPLOAD_VIDEO_COMMENT_LOCATOR)
                .click()
                .type("the greatest of all time")
                .sleep(1000)
                .end()
                .findById(elements.UPLOAD_TC_ID)
                .click()
                .sleep(1000)
                .end()
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()

        }


    }; return uploadVideoFailPage
});