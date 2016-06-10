/**
 * Created by brendon.kelley on 6/10/16.
 */
define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/propertiesPage',
    '../support/pages/elementsPage',
    '../support/pages/submissionChineseElements',
    '../support/pages/uploadTestChinesePage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionChineseElements,uploadTestChinesePage,require){

    var uploadTestChinesePage;

    bdd.describe('test submission page in Chinese', function (){
        bdd.before(function(){
            uploadTestChinesePage= new uploadTestChinesePage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestChinesePage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestChinesePage
                .uploadPhoto()
        });
    });
});