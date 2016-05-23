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
    '../support/pages/submissionFinnishElements',
    '../support/pages/uploadTestFinnishPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionFinnishElements,uploadTestFinnishPage,require){

    var uploadTestFinnishPage;

    bdd.describe('test submission page in german', function (){
        bdd.before(function(){
            uploadTestFinnishPage= new uploadTestFinnishPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestFinnishPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestFinnishPage
                .uploadPhoto()
        });
    });
});