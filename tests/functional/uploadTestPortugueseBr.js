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
    '../support/pages/submissionPortugueseBrElements',
    '../support/pages/uploadTestPortugueseBrPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionPortugueseBrElements,uploadTestPortugueseBrPage,require){

    var uploadTestPortugueseBrPage;

    bdd.describe('test submission page in PortugueseBr(brazil)', function (){
        bdd.before(function(){
            uploadTestPortugueseBrPage= new uploadTestPortugueseBrPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestPortugueseBrPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestPortugueseBrPage
                .uploadPhoto()
        });
    });
});