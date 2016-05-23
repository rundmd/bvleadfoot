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
    '../support/pages/submissionEstonianElements',
    '../support/pages/uploadTestEstonianPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionEstonianElements,uploadTestEstonianPage,require){

    var uploadTestEstonianPage;

    bdd.describe('test submission page in german', function (){
        //uploadTestGermanPage= new uploadTestGermanPage(this.remote);
        bdd.before(function(){
            uploadTestEstonianPage= new uploadTestEstonianPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestEstonianPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestEstonianPage
                .uploadPhoto()
        });
    });
});