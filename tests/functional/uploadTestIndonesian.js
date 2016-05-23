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
    '../support/pages/submissionIndonesianElements',
    '../support/pages/uploadTestIndonesianPage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionIndonesianElements,uploadTestIndonesianPage,require){

    var uploadTestIndonesianPage;

    bdd.describe('test submission page in Indonesian', function (){
        bdd.before(function(){
            uploadTestIndonesianPage= new uploadTestIndonesianPage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestIndonesianPage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestIndonesianPage
                .uploadPhoto()
        });
    });
});