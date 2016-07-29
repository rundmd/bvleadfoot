/**
 * Created by brendon.kelley on 5/18/16.
 */

define([
    'intern/chai!assert',
    '../utils',
    './common/actionsPage',
        './elementsPage',
        './propertiesPage',
        'intern/dojo/node!leadfoot/helpers/pollUntil',
        'require'
],  function (assert,utils,actions,elements,properties,pollUntil,require){
        function uploadVideoPage(remote)
        {
            this.remote=remote;
        }

    uploadVideoPage.prototype={
        constructor: uploadVideoPage,

        upload:function()
        {
            var session= this.remote;

            return session
                .get(properties.SUBMISSION_URL)
                .setFindTimeout(10000)
                .then(function(){
                    return actions.clickButton(session, elements.UPLOAD_VIDEO_BTN_LOCATOR, 'xpath');
                })
                .then(function(){
                    return actions.uploadFile(session, elements.UPLOAD_VIDEO_BTN_LOCATOR2,'/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/testvid.mp4', 'xpath')
                })
		              .then(function(){
                    return utils.fillUploadForm(session,"video",'test');
                })
                .setFindTimeout(10000)
                .then(function(){
                    return actions.getText(session, '//*[@id="thanks"]/div[2]/div[2]/div/div/div/p', 'xpath');
                })
        }
    }; return uploadVideoPage
});
