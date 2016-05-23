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
    '../support/pages/uploadInstagramFailPage',
    '../support/pages/instagramLoginPage',
    'require'
], function (bdd, assert, Command, utils, elements, properties, loginPage, uploadInstagramFailPage, instagramLoginPage,require) {

    var uploadInstagramFailPage;
    var instagramLoginPage;

    bdd.describe('Instagram photo upload', function(){
        bdd.before(function(){
            instagramLoginPage= new instagramLoginPage(this.remote);
            uploadInstagramFailPage= new uploadInstagramFailPage(this.remote);
            return instagramLoginPage.login();
        });

        // bdd.after(function () {
        //   return loginPage.logout();
        //});

        bdd.it('should upload a photo,comment,fail to hit post', function () {
            return uploadInstagramFailPage
                .uploadPlusComment()
                .then(function (results) {
                    assert.equal(results, false);
                });
        });

        bdd.it('should upload a photo,nickname,fail to hit post', function(){
            return uploadInstagramFailPage
                .uploadPlusNickname()
                .then(function (results) {
                    assert.equal(results, false);
                });

        });

        bdd.it('should upload a photo,comment,nickname,fail to hit post', function(){
            return uploadInstagramFailPage
                .uploadBoth()
                .then(function (results) {
                    assert.equal(results, false);
                });

        });

        bdd.it('should upload a photo,comment,hit agree,fail to hit post', function(){
            return uploadInstagramFailPage
                .uploadCommentAgree()
                .then(function (results) {
                    assert.equal(results, false);
                });

        });



    });
});
