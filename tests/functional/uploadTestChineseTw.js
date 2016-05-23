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
    '../support/pages/submissionChineseTwElements',
    '../support/pages/uploadTestChineseTwPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionChineseTwElements,uploadTestChineseTwPage,require){

    var uploadTestChineseTwPage;

    bdd.describe('test submission page in Chinese Tw', function (){
        bdd.before(function(){
            uploadTestChineseTwPage= new uploadTestChineseTwPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestChineseTwPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestChineseTwPage
                .uploadPhoto()
        });
    });
});