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
    '../support/pages/submissionItalianElements',
    '../support/pages/uploadTestItalianPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionItalianElements,uploadTestItalianPage,require){

    var uploadTestItalianPage;

    bdd.describe('test submission page in Italian', function (){
        bdd.before(function(){
            uploadTestItalianPage= new uploadTestItalianPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestItalianPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestItalianPage
                .uploadPhoto()
        });
    });
});