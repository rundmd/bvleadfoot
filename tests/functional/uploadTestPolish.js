/**
 * Created by brendon.kelley on 6/8/16.
 */
define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/propertiesPage',
    '../support/pages/elementsPage',
    '../support/pages/submissionPolishElements',
    '../support/pages/uploadTestPolishPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionPolishElements,uploadTestPolishPage,require){

    var uploadTestPolishPage;

    bdd.describe('test submission page in Polish', function (){
        bdd.before(function(){
            uploadTestPolishPage= new uploadTestPolishPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestPolishPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestPolishPage
                .uploadPhoto()
        });
    });
});