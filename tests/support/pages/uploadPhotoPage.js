/**
 * Created by brendon.kelley on 5/17/16.
 */

define([
    'intern/chai!assert',
    '../utils',
        './elementsPage',
        './propertiesPage',
        'intern/dojo/node!leadfoot/helpers/pollUntil',
    'intern/dojo/node!leadfoot/keys',
        'require'
    ], function (assert,utils,elements,properties,pollUntil,keys,require,results) {
	function uploadPhotoPage(remote){
                this.remote=remote;
	}
   

    uploadPhotoPage.prototype={
        constructor: uploadPhotoPage,

        upload:function(theTime)
        {
            var session=this.remote;
           var temp= "photo"; 
            return session
                .get(properties.SUBMISSION_URL)
		        .setFindTimeout(10000)
		        //.findById('UploadPhoto')
                //.findByXpath('//*[@id="index"]/div[2]/div[2]/div/div/div/div/label')
                //.click()
               // .end()
                .findById('UploadPhoto')
                .sleep(2000)
                //.then(function(){
                .type(require.toUrl('../files/BV_background_4_1440x900.png'))

                    //.pressKeys(require.toUrl('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png'))
                   // .pressKeys('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')

                    .sleep(2000)
                    .end()
                .then(function(){
                        return utils.fillUploadFormTest2(session,temp,theTime);
                    })
                .setFindTimeout(10000)

		        .findByXpath('//*[@id="thanks"]/div[2]/div[2]/div/div/div/p')
                .getVisibleText() 

        }

    }; return uploadPhotoPage
});
