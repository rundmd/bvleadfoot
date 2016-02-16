define([
    'intern!bdd', 
    'intern/chai!assert', 
    'intern/dojo/node!leadfoot/Command', 
    '../support/utils',
    '../support/pages/elementsPage',    
    '../support/pages/loginPage',
    '../support/pages/langFilterPage',
    'require'
], function (bdd, assert, Command, utils, elementsPage, loginPage, langFilterPage, require) {
   
    var loginPage, langFilterPage;

    bdd.describe('advanced search filters', function () {
        bdd.before(function () {
            loginPage = new loginPage(this.remote);
            langFilterPage = new langFilterPage(this.remote);
        });

        bdd.beforeEach(function () {
            //return loginPage.login();
        });

        bdd.it('should filter on lang', function () {
            //this.skip();
            return langFilterPage
                .addSingleFilter()
                .then(function (results) {
                    assert.equal(results, langFilterPage.LANG_FILTER_RESULTS);
                });
        });

        bdd.it('should filter on multiple langs', function () {
            //this.skip();
            return langFilterPage
                .addMultiFilters()
                .then(function (results) {
                    assert.equal(results, langFilterPage.MULTI_LANG_FILTER_RESULTS);
                });
        });

        bdd.it('should clear a single filter option', function () {
            return langFilterPage
                .clearSingleFilter()
                .then(function (results) {
                    assert.equal(results, 114);
                });
        });

        bdd.it('should clear multiple filter options', function () {
            return langFilterPage
                .clearMultiFilters()
                .then(function (results) {
                    assert.equal(results, elementsPage.DEFAULT_FILTER_RESULTS);
                });
        });

        bdd.it('should clear all filter options', function () {
            return langFilterPage
                .clearAllFilters()
                .then(function (results) {
                    assert.equal(results, elementsPage.DEFAULT_FILTER_RESULTS);
                });
        });

    });
});
           
