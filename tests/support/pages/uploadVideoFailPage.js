/**
 * Created by brendon.kelley on 5/20/16.
 */

define([
    'intern/chai!assert',
    '../utils',
    '../sharedFunctions',
    './elementsPage',
    './propertiesPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,shared,elements,properties,pollUntil,require,results) {
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
                .then(function(){
                    return shared.clickAButton(session, elements.UPLOAD_VIDEO_BTN_LOCATOR, 'xpath');
                })
                .then(function(){
                    return shared.uploadAFile(session,elements.UPLOAD_VIDEO_BTN_LOCATOR2, '/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/testvid.mp4', 'xpath');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_VIDEO_COMMENT_LOCATOR, "the greatest of all time", 'xpath');
                })
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()

        },

        uploadPlusNickname: function () {

            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .setFindTimeout(10000)
                .then(function(){
                    return shared.clickAButton(session, elements.UPLOAD_VIDEO_BTN_LOCATOR, 'xpath');
                })
                .then(function(){
                    return shared.uploadAFile(session,elements.UPLOAD_VIDEO_BTN_LOCATOR2, '/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/testvid.mp4', 'xpath');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_VIDEO_NICKNAME_LOCATOR, "bk", 'xpath');
                })
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()
        },

        uploadBoth: function(){
            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .setFindTimeout(10000)
                .then(function(){
                    return shared.clickAButton(session, elements.UPLOAD_VIDEO_BTN_LOCATOR, 'xpath');
                })
                .then(function(){
                    return shared.uploadAFile(session,elements.UPLOAD_VIDEO_BTN_LOCATOR2, '/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/testvid.mp4', 'xpath');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_VIDEO_COMMENT_LOCATOR, "the greatest of all time", 'xpath');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_VIDEO_NICKNAME_LOCATOR, "bk", 'xpath');
                })
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()

        },

        uploadCommentAgree: function(){
            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .setFindTimeout(10000)
                .then(function(){
                    return shared.clickAButton(session, elements.UPLOAD_VIDEO_BTN_LOCATOR, 'xpath');
                })
                .then(function(){
                    return shared.uploadAFile(session,elements.UPLOAD_VIDEO_BTN_LOCATOR2, '/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/testvid.mp4', 'xpath');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_VIDEO_COMMENT_LOCATOR, "the greatest of all time", 'xpath');
                })
                .then(function(){
                    return shared.clickAButton(session,elements.UPLOAD_TC_ID, 'id');
                })
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                .isEnabled()

        }


    }; return uploadVideoFailPage
});