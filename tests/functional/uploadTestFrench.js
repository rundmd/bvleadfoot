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
    '../support/pages/submissionFrenchElements',
    '../support/pages/uploadTestFrenchPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionFrenchElements,uploadTestFrenchPage,require){

    var uploadTestFrenchPage;

    bdd.describe('test submission page in german', function (){
        bdd.before(function(){
            uploadTestFrenchPage= new uploadTestFrenchPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestFrenchPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestFrenchPage
                .uploadPhoto()
        });
    });
});