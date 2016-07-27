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
    'intern/dojo/node!mongodb',
    'require'
    ], function (assert, utils, elements, properties, pollUntil, keys, mongodb, require) {
	function uploadPhotoPage(remote){
      this.remote = remote;
	}
   
    uploadPhotoPage.prototype={
      constructor: uploadPhotoPage,
        
       upload: function(timestamp) {
         var session = this.remote;
         var submissionType = 'photo';
         
         return session
           .get(properties.SUBMISSION_URL)
		   .setFindTimeout(10000)
           .findById('UploadPhoto')
             .type(require.toUrl('..' + properties.PHOTO_UPLOAD_LOCATION))
             .sleep(2000)
             .end()
           .then(function(){
             return utils.fillUploadFormTest2(session, submissionType, timestamp);
           })
           .setFindTimeout(10000)
		   .findByXpath('//*[@id="thanks"]/div[2]/div[2]/div/div/div/p')
           .getVisibleText(); 
      }

    }; 

    return uploadPhotoPage;
});
