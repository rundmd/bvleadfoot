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
    '../support/pages/submissionNorwegianElements',
    '../support/pages/uploadTestNorwegianPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionNorwegianElements,uploadTestNorwegianPage,require){

    var uploadTestNorwegianPage;

    bdd.describe('test submission page in Norwegian', function (){
        bdd.before(function(){
            uploadTestNorwegianPage= new uploadTestNorwegianPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestNorwegianPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestNorwegianPage
                .uploadPhoto()
        });
    });
});