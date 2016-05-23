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
    '../support/pages/submissionDutchElements',
    '../support/pages/uploadTestDutchPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionDutchElements,uploadTestDutchPage,require){

    var uploadTestDutchPage;

    bdd.describe('test submission page in Dutch', function (){
        bdd.before(function(){
            uploadTestDutchPage= new uploadTestDutchPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestDutchPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestDutchPage
                .uploadPhoto()
        });
    });
});