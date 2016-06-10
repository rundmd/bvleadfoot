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
    '../support/pages/submissionKazakhElements',
    '../support/pages/uploadTestKazakhPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionKazakhElements,uploadTestKazakhPage,require){

    var uploadTestKazakhPage;

    bdd.describe('test submission page in Kazakh', function (){
        bdd.before(function(){
            uploadTestKazakhPage= new uploadTestKazakhPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestKazakhPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestKazakhPage
                .uploadPhoto()
        });
    });
});