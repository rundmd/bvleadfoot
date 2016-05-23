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
    '../support/pages/submissionFrenchCaElements',
    '../support/pages/uploadTestFrenchCaPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionFrenchCaElements,uploadTestFrenchCaPage,require){

    var uploadTestFrenchCaPage;

    bdd.describe('test submission page in german', function (){
        bdd.before(function(){
            uploadTestFrenchCaPage= new uploadTestFrenchCaPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestFrenchCaPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestFrenchCaPage
                .uploadPhoto()
        });
    });
});