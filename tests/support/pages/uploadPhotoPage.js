/**
 * Created by brendon.kelley on 5/17/16.
 */

define([
    'intern/chai!assert',
    '../utils',
        './elementsPage',
        './propertiesPage',
        'intern/dojo/node!leadfoot/helpers/pollUntil',
        'require'
    ], function (assert,utils,elements,properties,pollUntil,require,results) {
	function uploadPhotoPage(remote){
                this.remote=remote;
	}
   

    uploadPhotoPage.prototype={
        constructor: uploadPhotoPage,

        upload:function()
        {
            var session=this.remote;
           var temp= "photo"; 
            return session
                .get(properties.SUBMISSION_URL)
		.setFindTimeout(10000)
		.findById('UploadPhoto')
                    .type(require.toUrl('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png'))
                    .sleep(2000)
                    .end()

                .then(function(){
                        return utils.fillUploadFormTest(session,temp);
                    })
                .setFindTimeout(10000)

		.findByXpath('//*[@id="thanks"]/div[2]/div[2]/div/div/div/p')
                .getVisibleText() 

        }

    }; return uploadPhotoPage
});
