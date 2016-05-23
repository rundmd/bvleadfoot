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
    '../support/pages/submissionVietnameseElements',
    '../support/pages/uploadTestVietnamesePage',
    'require'
], function(bdd,assert,Command,utils,properties,elements,submissionVietnameseElements,uploadTestVietnamesePage,require){

    var uploadTestVietnamesePage;

    bdd.describe('test submission page in Vietnamese', function (){
        bdd.before(function(){
            uploadTestVietnamesePage= new uploadTestVietnamesePage(this.remote);
        });
        bdd.it('test text on submission page', function(){
            return uploadTestVietnamesePage
                .checkButtonsText()
        });
        bdd.it('check text on upload photo', function(){
            return uploadTestVietnamesePage
                .uploadPhoto()
        });
    });
});