define([
    'intern!bdd', 
    'intern/chai!assert', 
    'intern/dojo/node!leadfoot/Command', 
    '../support/utils',
    '../support/pages/elementsPage',    
    '../support/pages/loginPage',
    '../support/pages/channelFilterPage',
    'require'
], function (bdd, assert, Command, utils, elementsPage, loginPage, channelFilterPage, require) {
   
    var loginPage, channelFilterPage;

    bdd.describe('advanced search filters', function () {
        bdd.before(function () {
            loginPage = new loginPage(this.remote);
            channelFilterPage = new channelFilterPage(this.remote);
        });

        bdd.beforeEach(function () {
            //return loginPage.login();
        });

        bdd.it('should filter on channel', function () {
            //this.skip();
            return channelFilterPage
                .addSingleFilter()
                .then(function (results) {
                    assert.equal(results, channelFilterPage.CHANNEL_FILTER_RESULTS);
                });
        });

        bdd.it('should filter on multiple channels', function () {
            //this.skip();
            return channelFilterPage
                .addMultiFilters()
                .then(function (results) {
                    assert.equal(results, channelFilterPage.MULTI_CHANNEL_FILTER_RESULTS);
                });
        });

        bdd.it('should clear a single filter option', function () {
            return channelFilterPage
                .clearSingleFilter()
                .then(function (results) {
                    assert.equal(results, 21);
                });
        });

        bdd.it('should clear multiple filter options', function () {
            return channelFilterPage
                .clearMultiFilters()
                .then(function (results) {
                    assert.equal(results, elementsPage.DEFAULT_FILTER_RESULTS);
                });
        });

        bdd.it('should clear all filter options', function () {
            return channelFilterPage
                .clearAllFilters()
                .then(function (results) {
                    assert.equal(results, elementsPage.DEFAULT_FILTER_RESULTS);
                });
        });

    });
});
           
