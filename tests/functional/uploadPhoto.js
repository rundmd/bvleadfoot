define([
    'intern!bdd', 
    'intern/chai!assert', 
    'intern/dojo/node!leadfoot/Command', 
    '../support/utils',
    '../support/pages/elementsPage',    
    '../support/pages/propertiesPage',
    '../support/pages/uploadPhotoPage',
    'require'
], function (bdd, assert, Command, utils, elements, properties, uploadPhotoPage, require) {
   
    var uploadPhotoPage;

    bdd.describe('Photo Upload', function () {
        bdd.before(function () {
            uploadPhotoPage = new uploadPhotoPage(this.remote);
        });

        bdd.it('should upload a photo', function () {
            return uploadPhotoPage
                .upload()
                .then(function (results) {
                    assert.equal(results, properties.UPLOAD_PHOTO_THANK_YOU_MSG);
                });
        });

    });
});
           
