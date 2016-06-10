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
    '../support/pages/submissionRussianElements',
    '../support/pages/uploadTestRussianPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionRussianElements,uploadTestRussianPage,require){

    var uploadTestRussianPage;

    bdd.describe('test submission page in Russian', function (){
        bdd.before(function(){
            uploadTestRussianPage= new uploadTestRussianPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestRussianPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestRussianPage
                .uploadPhoto()
        });
    });
});