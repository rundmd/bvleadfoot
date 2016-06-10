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
    '../support/pages/submissionArabicElements',
    '../support/pages/uploadTestArabicPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionArabicElements,uploadTestArabicPage,require){

    var uploadTestArabicPage;

    bdd.describe('test submission page in arabic', function (){
        //uploadTestGermanPage= new uploadTestGermanPage(this.remote);
        bdd.before(function(){
            uploadTestArabicPage= new uploadTestArabicPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestArabicPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestArabicPage
                .uploadPhoto()
        });
    });
});