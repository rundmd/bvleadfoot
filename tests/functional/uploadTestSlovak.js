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
    '../support/pages/submissionSlovakElements',
    '../support/pages/uploadTestSlovakPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionSlovakElements,uploadTestSlovakPage,require){

    var uploadTestSlovakPage;

    bdd.describe('test submission page in Slovak', function (){
        bdd.before(function(){
            uploadTestSlovakPage= new uploadTestSlovakPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestSlovakPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestSlovakPage
                .uploadPhoto()
        });
    });
});