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
    '../support/pages/submissionRomanianElements',
    '../support/pages/uploadTestRomanianPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionRomanianElements,uploadTestRomanianPage,require){

    var uploadTestRomanianPage;

    bdd.describe('test submission page in Romanian', function (){
        bdd.before(function(){
            uploadTestRomanianPage= new uploadTestRomanianPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestRomanianPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestRomanianPage
                .uploadPhoto()
        });
    });
});