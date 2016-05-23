/**
 * Created by brendon.kelley on 6/6/16.
 */
define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/propertiesPage',
    '../support/pages/elementsPage',
    '../support/pages/submissionBulgarianElements',
    '../support/pages/uploadTestBulgarianPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionBulgarianElements,uploadTestBulgarianPage,require){

    var uploadTestBulgarianPage;

    bdd.describe('test submission page in german', function (){
        //uploadTestGermanPage= new uploadTestGermanPage(this.remote);
        bdd.before(function(){
            uploadTestBulgarianPage= new uploadTestBulgarianPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestBulgarianPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestBulgarianPage
                .uploadPhoto()
        });
    });
});