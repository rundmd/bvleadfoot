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
    '../support/pages/submissionPortugueseElements',
    '../support/pages/uploadTestPortuguesePage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionPortugueseElements,uploadTestPortuguesePage,require){

    var uploadTestPortuguesePage;

    bdd.describe('test submission page in Portuguese', function (){
        bdd.before(function(){
            uploadTestPortuguesePage= new uploadTestPortuguesePage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestPortuguesePage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestPortuguesePage
                .uploadPhoto()
        });
    });
});