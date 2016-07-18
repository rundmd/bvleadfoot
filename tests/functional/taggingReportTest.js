/**
 * Created by brendon.kelley on 6/23/16.
 */
define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/propertiesPage',
    '../support/pages/elementsPage',
    '../support/pages/tagReportPropertiesPage',
    '../support/pages/loginPage',
    '../support/pages/taggingReportTestPage',
    'require'
], function (bdd,assert,Command,utils,properties,elements,reportProperties,loginPage,taggingReportTestPage,require) {
    var loginPage;
    var taggingReportTestPage;


    bdd.describe('log into console', function(){

        bdd.before(function(){
            taggingReportTestPage= new taggingReportTestPage(this.remote);

        });
        
        bdd.it('log into console and set filters', function(){
            return taggingReportTestPage
                .setFilters()
        });
        
        bdd.it('get the results from the filters', function(){
            return taggingReportTestPage
                .getResults()
                .then(function(results){
                    assert.equal(results, reportProperties.RESULTS);
                });
        });
        
    });

});