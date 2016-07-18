/**
 * Created by brendon.kelley on 6/16/16.
 */
define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/propertiesPage',
    '../support/pages/elementsPage',
    '../support/pages/reportPropertiesPage',
    '../support/pages/loginPage',
    '../support/pages/reportingTestPage',
    'require'
], function (bdd,assert,Command,utils,properties,elements,reportProperties,loginPage,reportingTestPage,require) {
    var loginPage;
    var reportingTestPage;


    bdd.describe('log into console', function(){

        bdd.before(function(){
            reportingTestPage= new reportingTestPage(this.remote);

        });


        bdd.it('change the dates', function(){
            return reportingTestPage
                .setDates();
        });

        bdd.it('checking total collected', function(){
            return reportingTestPage
                .checkTotalCollected()
                .then(function(results){
                    assert.equal(results,reportProperties.TOTAL_COLLECTED);
                });
        });

        bdd.it('checking sent for BV mod', function(){
            return reportingTestPage
                .sentForBvMod()
                .then(function(results){
                    assert.equal(results,reportProperties.SENT_FOR_BV_MOD);
                });
        });

        bdd.it('checking approved BV mod', function(){
            return reportingTestPage
                .bvModApproved()
                .then(function(results){
                    assert.equal(results,reportProperties.BV_MOD_APPROVED);
                });
        });

        bdd.it('checking approved man', function(){
            return reportingTestPage
                .manApproved()
                .then(function(results){
                    assert.equal(results,reportProperties.MANUALLY_APPROVED);
                });
        });

        bdd.it('checking bv product tagged', function(){
            return reportingTestPage
                .bvProductTagged()
                .then(function(results){
                    assert.equal(results,reportProperties.BV_PRODUCT_TAGGED);
                });
        });


        bdd.it('checking sent for rm', function(){
            return reportingTestPage
                .sentForRm()
                .then(function(results){
                    assert.equal(results,reportProperties.SENT_FOR_RM);
                });
        });

        bdd.it('checking rm approved', function(){
            return reportingTestPage
                .rmApproved()
                .then(function(results){
                    assert.equal(results,reportProperties.RM_APPROVE);
                });
        });




    });

});