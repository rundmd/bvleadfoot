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
    '../support/pages/submissionJapaneseElements',
    '../support/pages/uploadTestJapanesePage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionJapaneseElements,uploadTestJapanesePage,require){

    var uploadTestJapanesePage;

    bdd.describe('test submission page in Japanese', function (){
        bdd.before(function(){
            uploadTestJapanesePage= new uploadTestJapanesePage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestJapanesePage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestJapanesePage
                .uploadPhoto()
        });
    });
});