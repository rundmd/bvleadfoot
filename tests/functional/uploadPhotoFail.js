/**
 * Created by brendon.kelley on 5/20/16.
 */

define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/elementsPage',
    '../support/pages/propertiesPage',
    '../support/pages/loginPage',
    '../support/pages/uploadPhotoFailPage',
    'require'
], function (bdd, assert, Command, utils, elements, properties, loginPage, uploadPhotoFailPage, require) {

    var uploadPhotoFailPage;

    bdd.describe('Photo Upload', function () {
        bdd.before(function () {
            uploadPhotoFailPage = new uploadPhotoFailPage(this.remote);
        });


        bdd.it('should upload a photo,comment,fail to hit post', function () {
            return uploadPhotoFailPage
                .uploadPlusComment()
                .then(function (results) {
                    assert.equal(results, false);
                });
        });
        
        bdd.it('should upload a photo,nickname,fail to hit post', function(){
            return uploadPhotoFailPage
                .uploadPlusNickname()
                .then(function (results) {
                    assert.equal(results, false);
                });
            
        });

        bdd.it('should upload a photo,comment,nickname,fail to hit post', function(){
            return uploadPhotoFailPage
                .uploadBoth()
                .then(function (results) {
                    assert.equal(results, false);
                });

        });

        bdd.it('should upload a photo,comment,hit agree,fail to hit post', function(){
            return uploadPhotoFailPage
                .uploadCommentAgree()
                .then(function (results) {
                    assert.equal(results, false);
                });

        });
        
        

    });
});
