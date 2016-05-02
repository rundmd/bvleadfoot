define([
    'intern!bdd', 
    'intern/chai!assert', 
    'intern/dojo/node!leadfoot/Command', 
    '../support/utils',
    '../support/pages/elementsPage',    
    '../support/pages/propertiesPage',
    '../support/pages/loginPage',
    '../support/pages/uploadInstagramPage',
    'require'
], function (bdd, assert, Command, utils, elements, properties, loginPage, uploadInstagramPage, require) {
   
    var uploadInstagramPage;

    bdd.describe('Instagram Upload', function () {
        bdd.before(function () {
            uploadInstagramPage = new uploadInstagramPage(this.remote);
        });

       // bdd.after(function () {
         //   return loginPage.logout();
        //});

        bdd.it('should upload content from instagram', function () {
            return uploadInstagramPage
                .upload()
                .then(function (results) {
                    assert.equal(results, properties.UPLOAD_PHOTO_THANK_YOU_MSG);
                });
        });

    });
});
           
