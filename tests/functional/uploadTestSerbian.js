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
    '../support/pages/submissionSerbianElements',
    '../support/pages/uploadTestSerbianPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionSerbianElements,uploadTestSerbianPage,require){

    var uploadTestSerbianPage;

    bdd.describe('test submission page in Serbian', function (){
        bdd.before(function(){
            uploadTestSerbianPage= new uploadTestSerbianPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestSerbianPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestSerbianPage
                .uploadPhoto()
        });
    });
});