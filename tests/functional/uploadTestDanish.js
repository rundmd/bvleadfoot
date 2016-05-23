/**
 * Created by brendon.kelley on 6/6/16.
 */
define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/propertiesPage',
    '../support/pages/elementsPage',
    '../support/pages/submissionDanishElements',
    '../support/pages/uploadTestDanishPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionDanishElements,uploadTestDanishPage,require){

    var uploadTestDanishPage;

    bdd.describe('test submission page in german', function (){
        //uploadTestGermanPage= new uploadTestGermanPage(this.remote);
        bdd.before(function(){
            uploadTestDanishPage= new uploadTestDanishPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestDanishPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestDanishPage
                .uploadPhoto()
        });
    });
});