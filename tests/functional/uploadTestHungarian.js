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
    '../support/pages/submissionHungarianElements',
    '../support/pages/uploadTestHungarianPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionHungarianElements,uploadTestHungarianPage,require){

    var uploadTestHungarianPage;

    bdd.describe('test submission page in Hungarian', function (){
        bdd.before(function(){
            uploadTestHungarianPage= new uploadTestHungarianPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestHungarianPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestHungarianPage
                .uploadPhoto()
        });
    });
});