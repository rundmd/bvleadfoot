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
    '../support/pages/submissionSlovenianElements',
    '../support/pages/uploadTestSlovenianPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionSlovenianElements,uploadTestSlovenianPage,require){

    var uploadTestSlovenianPage;

    bdd.describe('test submission page in Slovenian', function (){
        bdd.before(function(){
            uploadTestSlovenianPage= new uploadTestSlovenianPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestSlovenianPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestSlovenianPage
                .uploadPhoto()
        });
    });
});