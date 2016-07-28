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
    function uploadPhotoFailPage(remote){
        this.remote=remote;
    }


    uploadPhotoFailPage.prototype={
        constructor: uploadPhotoFailPage,

        uploadPlusComment:function()
        {
            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .setFindTimeout(10000)
                .then(function(){
                    return shared.uploadAFile(session,'UploadPhoto','/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png','id');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_PHOTO_COMMENT_LOCATOR, "this is great", 'xpath');
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
                    return shared.uploadAFile(session,'UploadPhoto','/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png','id');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_NICKNAME_LOCATOR, "test", 'xpath');
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
                    return shared.uploadAFile(session,'UploadPhoto','/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png','id');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_PHOTO_COMMENT_LOCATOR, "this is great", 'xpath');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_NICKNAME_LOCATOR, "test", 'xpath');
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
                    return shared.uploadAFile(session,'UploadPhoto','/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png','id');
                })
                .then(function(){
                    return shared.enterText(session,elements.UPLOAD_PHOTO_COMMENT_LOCATOR, "this is great", 'xpath');
                })
                .then(function(){
                    return shared.clickAButton(session, elements.UPLOAD_TC_ID, 'id');
                })
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                    .isEnabled()
        }


    }; return uploadPhotoFailPage
});
