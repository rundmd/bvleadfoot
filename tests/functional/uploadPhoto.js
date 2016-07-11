define([
    'intern!bdd', 
    'intern/chai!assert', 
    'intern/dojo/node!leadfoot/Command', 
    '../support/utils',
    '../support/pages/elementsPage',    
    '../support/pages/propertiesPage',
    '../support/pages/loginPage',
    '../support/pages/uploadPhotoPage',
    '../support/pages/checkConsolePage',
    'require'
], function (bdd, assert, Command, utils, elements, properties, loginPage, uploadPhotoPage, checkConsolePage,require) {
   
    var uploadPhotoPage;
    var checkConsolePage;

    var timestamp = Date.now().toString();

    bdd.describe('Photo Upload', function () {
        bdd.before(function () {
            uploadPhotoPage = new uploadPhotoPage(this.remote);
            checkConsolePage= new checkConsolePage(this.remote);
        });

        //var time1=time;

        bdd.it('should upload a photo', function () {
            return uploadPhotoPage
                .upload(timestamp)
                .then(function (results) {
                    assert.equal(results, properties.UPLOAD_PHOTO_THANK_YOU_MSG);
                });
        });

        //var time2=time1;
        bdd.it('make sure post is in console',function(){
            return checkConsolePage
                .checkUpload(timestamp)
                .then(function (results) {
                    assert.include(results,timestamp, 'it is here');
                });
        })

    });
});
           
