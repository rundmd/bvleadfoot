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
    '../support/pages/submissionGreekElements',
    '../support/pages/uploadTestGreekPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionGreekElements,uploadTestGreekPage,require){

    var uploadTestGreekPage;

    bdd.describe('test submission page in german', function (){
        //uploadTestGermanPage= new uploadTestGermanPage(this.remote);
        bdd.before(function(){
            uploadTestGreekPage= new uploadTestGreekPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestGreekPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestGreekPage
                .uploadPhoto()
        });
    });
});