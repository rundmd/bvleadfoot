/**
 * Created by brendon.kelley on 5/19/16.
 */

define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/elementsPage',
    '../support/pages/propertiesPage',
    '../support/pages/uploadInstagramPageBrendon',
    '../support/pages/instagramLoginPage',
    'require'
], function(bdd,assert,Command,utils,elements,properties,uploadInstagramPageBrendon,instagramLoginPage,require){
        var uploadInstagramPageBrendon;
        var instagramLoginPage;

    bdd.describe('Instagram photo upload', function(){
        bdd.before(function(){
            instagramLoginPage= new instagramLoginPage(this.remote);
            uploadInstagramPageBrendon= new uploadInstagramPageBrendon(this.remote);
            return instagramLoginPage.login();
        });

        bdd.it('should upload a photo to instagram', function(){
            return uploadInstagramPageBrendon
                .upload()
                .then(function(results){
                    assert.equal(results,properties.UPLOAD_PHOTO_THANK_YOU_MSG);
                });
        });
    });
});