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
    '../support/pages/submissionSwedishElements',
    '../support/pages/uploadTestSwedishPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionSwedishElements,uploadTestSwedishPage,require){

    var uploadTestSwedishPage;

    bdd.describe('test submission page in Swedish', function (){
        bdd.before(function(){
            uploadTestSwedishPage= new uploadTestSwedishPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestSwedishPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestSwedishPage
                .uploadPhoto()
        });
    });
});