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
    '../support/pages/submissionCzechElements',
    '../support/pages/uploadTestCzechPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionCzechElements,uploadTestCzechPage,require){

    var uploadTestCzechPage;

    bdd.describe('test submission page in german', function (){
        //uploadTestGermanPage= new uploadTestGermanPage(this.remote);
        bdd.before(function(){
            uploadTestCzechPage= new uploadTestCzechPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestCzechPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestCzechPage
                .uploadPhoto()
        });
    });
});