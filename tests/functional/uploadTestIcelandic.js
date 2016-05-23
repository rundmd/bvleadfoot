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
    '../support/pages/submissionIcelandicElements',
    '../support/pages/uploadTestIcelandicPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionIcelandicElements,uploadTestIcelandicPage,require){

    var uploadTestIcelandicPage;

    bdd.describe('test submission page in Icelandic', function (){
        bdd.before(function(){
            uploadTestIcelandicPage= new uploadTestIcelandicPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestIcelandicPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestIcelandicPage
                .uploadPhoto()
        });
    });
});