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
    '../support/pages/submissionLithuanianElements',
    '../support/pages/uploadTestLithuanianPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionLithuanianElements,uploadTestLithuanianPage,require){

    var uploadTestLithuanianPage;

    bdd.describe('test submission page in Lithuanian', function (){
        bdd.before(function(){
            uploadTestLithuanianPage= new uploadTestLithuanianPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestLithuanianPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestLithuanianPage
                .uploadPhoto()
        });
    });
});