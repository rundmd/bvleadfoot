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
                .findById('UploadPhoto')
                    .type(require.toUrl('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png'))
                    .end()
                .findByXpath(elements.UPLOAD_PHOTO_COMMENT_LOCATOR)
                    .click()
                    .type("this is great")
                    .sleep(2000)
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
                .findById('UploadPhoto')
                .type(require.toUrl('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png'))
                .end()
                .findByXpath(elements.UPLOAD_NICKNAME_LOCATOR)
                .click()
                .type("test")
                .sleep(2000)
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
                .findById('UploadPhoto')
                    .type(require.toUrl('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png'))
                    .end()
                .findByXpath(elements.UPLOAD_PHOTO_COMMENT_LOCATOR)
                    .click()
                    .type("this is great")
                    .sleep(2000)
                    .end()
                .findByXpath(elements.UPLOAD_NICKNAME_LOCATOR)
                    .click()
                    .type("test")
                    .sleep(2000)
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
                .findById('UploadPhoto')
                    .type(require.toUrl('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png'))
                    .end()
                .findByXpath(elements.UPLOAD_PHOTO_COMMENT_LOCATOR)
                    .click()
                    .type("this is great")
                    .sleep(2000)
                    .end()
                .findById(elements.UPLOAD_TC_ID)
                    .click()
                    .sleep(1000)
                    .end()
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                    .isEnabled()

        }


    }; return uploadPhotoFailPage
});
