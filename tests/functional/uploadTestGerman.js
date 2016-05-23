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
    '../support/pages/submissionGermanElements',
    '../support/pages/uploadTestGermanPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionGermanElements,uploadTestGermanPage,require){

    var uploadTestGermanPage;

    bdd.describe('test submission page in german', function (){
        //uploadTestGermanPage= new uploadTestGermanPage(this.remote);
        bdd.before(function(){
            uploadTestGermanPage= new uploadTestGermanPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestGermanPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestGermanPage
                .uploadPhoto()
        });
    });
});