/**
 * Created by brendon.kelley on 5/26/16.
 */
define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/elementsPage',
    '../support/pages/propertiesPage',
    '../support/pages/uploadFacebookPage',
    '../support/pages/facebookLoginPage',
    'require'
], function(bdd,assert,Command,utils,elements,properties,uploadFacebookPage,facebookLoginPage,require){
    var uploadFacebookPage;
    var facebookLoginPage;

    bdd.describe('facebook photo upload', function(){
        bdd.before(function(){
            facebookLoginPage= new facebookLoginPage(this.remote);
            uploadFacebookPage= new uploadFacebookPage(this.remote);
            return facebookLoginPage.login();
        });

        bdd.it('should upload a photo to facebook', function(){
            return uploadFacebookPage
                .upload()
                .then(function(results){
                    assert.equal(results,properties.UPLOAD_PHOTO_THANK_YOU_MSG);
                });
        });
    });
});