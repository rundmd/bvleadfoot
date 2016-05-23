/**
 * Created by brendon.kelley on 5/18/16.
 */

define([
    'intern/chai!assert',
    '../utils',
        './elementsPage',
        './propertiesPage',
        'intern/dojo/node!leadfoot/helpers/pollUntil',
        'require'
],  function (assert,utils,elements,properties,pollUntil,require){
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
                .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR)
                    .click()
                    .sleep(2000)
                    .end()
                .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR2)
                    .type(require.toUrl('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/testvid.mp4'))
                    .sleep(20000)
                    .end()
		.then(function(){
			return utils.fillUploadFormTest(session,"video");
		  })
		.setFindTimeout(10000)
                .findByXpath('//*[@id="thanks"]/div[2]/div[2]/div/div/div/p')
                .getVisibleText()

        }
    }; return uploadVideoPage
});
