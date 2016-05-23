/**
 * Created by brendon.kelley on 6/7/16.
 */
define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/propertiesPage',
    '../support/pages/elementsPage',
    '../support/pages/submissionKoreanElements',
    '../support/pages/uploadTestKoreanPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionKoreanElements,uploadTestKoreanPage,require){

    var uploadTestKoreanPage;

    bdd.describe('test submission page in Korean', function (){
        bdd.before(function(){
            uploadTestKoreanPage= new uploadTestKoreanPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestKoreanPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestKoreanPage
                .uploadPhoto()
        });
    });
});