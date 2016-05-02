define([
    'intern!bdd', 
    'intern/chai!assert', 
    'intern/dojo/node!leadfoot/Command', 
    '../support/utils',
    '../support/pages/elementsPage',    
    '../support/pages/propertiesPage',
    '../support/pages/loginPage',
    '../support/pages/uploadPhotoPage',
    'require'
], function (bdd, assert, Command, utils, elements, properties, loginPage, uploadPhotoPage, require) {
   
    var uploadPhotoPage;

    bdd.describe('Photo Upload', function () {
        bdd.before(function () {
            uploadPhotoPage = new uploadPhotoPage(this.remote);
        });

       // bdd.after(function () {
         //   return loginPage.logout();
        //});

        bdd.it('should upload a photo', function () {
            return uploadPhotoPage
                .upload()
                .then(function (results) {
                    assert.equal(results, properties.UPLOAD_PHOTO_THANK_YOU_MSG);
                });
        });

    });
});
           
