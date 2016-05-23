/**
 * Created by brendon.kelley on 6/10/16.
 */
define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/propertiesPage',
    '../support/pages/elementsPage',
    '../support/pages/submissionChineseSgElements',
    '../support/pages/uploadTestChineseSgPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionChineseSgElements,uploadTestChineseSgPage,require){

    var uploadTestChineseSgPage;

    bdd.describe('test submission page in Chinese sg', function (){
        bdd.before(function(){
            uploadTestChineseSgPage= new uploadTestChineseSgPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestChineseSgPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestChineseSgPage
                .uploadPhoto()
        });
    });
});