define([
    'intern!bdd', 
    'intern/chai!assert', 
    'intern/dojo/node!leadfoot/Command', 
    '../support/utils',
    '../support/pages/elementsPage',    
    '../support/pages/propertiesPage',
    '../support/pages/loginPage',
    '../support/pages/uploadVideoPage',
    'require'
], function (bdd, assert, Command, utils, elements, properties, loginPage, uploadVideoPage, require) {
   
    var uploadVideoPage;

    bdd.describe('Video Upload', function () {
        bdd.before(function () {
            uploadVideoPage = new uploadVideoPage(this.remote);
        });
        
        bdd.it('should upload a video', function () {
            return uploadVideoPage
                .upload()
                .then(function (results) {
                    assert.equal(results, properties.UPLOAD_VIDEO_THANK_YOU_MSG);
                });
        });

    });
});
           
