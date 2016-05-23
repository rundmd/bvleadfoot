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
    '../support/pages/submissionUkrainianElements',
    '../support/pages/uploadTestUkrainianPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionUkrainianElements,uploadTestUkrainianPage,require){

    var uploadTestUkrainianPage;

    bdd.describe('test submission page in Ukrainian', function (){
        bdd.before(function(){
            uploadTestUkrainianPage= new uploadTestUkrainianPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestUkrainianPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestUkrainianPage
                .uploadPhoto()
        });
    });
});