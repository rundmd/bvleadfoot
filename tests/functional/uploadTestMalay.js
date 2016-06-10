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
    '../support/pages/submissionMalayElements',
    '../support/pages/uploadTestMalayPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionMalayElements,uploadTestMalayPage,require){

    var uploadTestMalayPage;

    bdd.describe('test submission page in Malay', function (){
        bdd.before(function(){
            uploadTestMalayPage= new uploadTestMalayPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestMalayPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestMalayPage
                .uploadPhoto()
        });
    });
});