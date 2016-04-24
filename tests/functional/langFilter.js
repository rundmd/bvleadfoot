define([
    'intern!bdd', 
    'intern/chai!assert', 
    'intern/dojo/node!leadfoot/Command', 
    '../support/utils',
    '../support/pages/propertiesPage',
    '../support/pages/loginPage',
    '../support/pages/langFilterPage',
    'require'
], function (bdd, assert, Command, utils, properties, loginPage, langFilterPage, require) {
   
    var loginPage; 
    var langFilterPage;

    bdd.describe('Language Filter', function () {
        bdd.before(function () {
            loginPage = new loginPage(this.remote);
            langFilterPage = new langFilterPage(this.remote);
            return loginPage.loginWithIntroCookie();
        });

        bdd.after(function () {
            return loginPage.logout();
        });

        bdd.beforeEach(function () {
            //return loginPage.loginWithIntroCookie();
        });

        bdd.it('should filter on lang', function () {
            //this.skip();
            return langFilterPage
                .setSingleFilter()
                .then(function (results) {
                    assert.equal(results, properties.LANG_FILTER_RESULTS);
                });
        });

        bdd.it('should filter on multiple langs', function () {
            //this.skip();
            return langFilterPage
                .setMultiFilters()
                .then(function (results) {
                    assert.equal(results, properties.MULTI_LANG_FILTER_RESULTS);
                });
        });

        bdd.it('should clear a single filter option', function () {
            //this.skip();
            return langFilterPage
                .clearSingleFilter()
                .then(function (results) {
                    assert.equal(results, properties.LANG_FILTER_RESULTS);
                });
        });

        bdd.it('should clear multiple filter options', function () {
            //this.skip();
            return langFilterPage
                .clearMultiFilters()
                .then(function (results) {
                    assert.equal(results, properties.DEFAULT_FILTER_RESULTS);
                });
        });

        bdd.it('should clear all filter options', function () {
            //this.skip();
            return langFilterPage
                .clearAllFilters()
                .then(function (results) {
                    assert.equal(results, properties.DEFAULT_FILTER_RESULTS);
                });
        });

    });
});
           
