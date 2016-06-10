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
    '../support/pages/submissionCroatianElements',
    '../support/pages/uploadTestCroatianPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionCroatianElements,uploadTestCroatianPage,require){

    var uploadTestCroatianPage;

    bdd.describe('test submission page in croatian', function (){
        bdd.before(function(){
            uploadTestCroatianPage= new uploadTestCroatianPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestCroatianPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestCroatianPage
                .uploadPhoto()
        });
    });
});