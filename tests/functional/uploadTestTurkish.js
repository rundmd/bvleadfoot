/**
 * Created by brendon.kelley on 6/9/16.
 */
define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/propertiesPage',
    '../support/pages/elementsPage',
    '../support/pages/submissionTurkishElements',
    '../support/pages/uploadTestTurkishPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionTurkishElements,uploadTestTurkishPage,require){

    var uploadTestTurkishPage;

    bdd.describe('test submission page in Turkish', function (){
        bdd.before(function(){
            uploadTestTurkishPage= new uploadTestTurkishPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestTurkishPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestTurkishPage
                .uploadPhoto()
        });
    });
});