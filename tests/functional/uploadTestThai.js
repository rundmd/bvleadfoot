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
    '../support/pages/submissionThaiElements',
    '../support/pages/uploadTestThaiPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionThaiElements,uploadTestThaiPage,require){

    var uploadTestThaiPage;

    bdd.describe('test submission page in Thai', function (){
        bdd.before(function(){
            uploadTestThaiPage= new uploadTestThaiPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestThaiPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestThaiPage
                .uploadPhoto()
        });
    });
});