/**
 * Created by brendon.kelley on 5/17/16.
 */

define([
    'intern/chai!assert',
    '../utils',
    './elementsPage',
    './propertiesPage',
    './common/actionsPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'intern/dojo/node!leadfoot/keys',
    'intern/dojo/node!mongodb',
    'require'
    ], function (assert, utils, elements, properties, actions, pollUntil, keys, mongodb, require) {
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
           .then( function () {
             return actions.uploadFile(session, elements.UPLOAD_PHOTO_BTN_ID, properties.PHOTO_UPLOAD_LOCATION, 'id');
           })
           .then( function () {
             return utils.fillUploadForm(session, submissionType, timestamp);
           })
           .then( function () {
             return actions.getText(session, elements.UPLOAD_THANK_YOU_MESSAGE_LOCATOR, 'xpath');
           })
           .then( function (results) {
             assert.equal(results, properties.UPLOAD_PHOTO_THANK_YOU_MSG);
           });
      }

    }; 

    return uploadPhotoPage;
});
