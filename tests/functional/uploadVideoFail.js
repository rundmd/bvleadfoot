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
    '../support/pages/uploadVideoFailPage',
    'require'
], function (bdd, assert, Command, utils, elements, properties, loginPage, uploadVideoFailPage, require) {

    var uploadVideoFailPage;

    bdd.describe('video Upload', function () {
        bdd.before(function () {
            uploadVideoFailPage = new uploadVideoFailPage(this.remote);
        });

        // bdd.after(function () {
        //   return loginPage.logout();
        //});

        bdd.it('should upload a video,comment,fail to hit post', function () {
            return uploadVideoFailPage
                .uploadPlusComment()
                .then(function (results) {
                    assert.equal(results, false);
                });
        });

        bdd.it('should upload a video,nickname,fail to hit post', function(){
            return uploadVideoFailPage
                .uploadPlusNickname()
                .then(function (results) {
                    assert.equal(results, false);
                });

        });

        bdd.it('should upload a video,comment,nickname,fail to hit post', function(){
            return uploadVideoFailPage
                .uploadBoth()
                .then(function (results) {
                    assert.equal(results, false);
                });

        });

        bdd.it('should upload a video,comment,hit agree,fail to hit post', function(){
            return uploadVideoFailPage
                .uploadCommentAgree()
                .then(function (results) {
                    assert.equal(results, false);
                });

        });



    });
});