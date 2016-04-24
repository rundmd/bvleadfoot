define([
    'intern!bdd', 
    'intern/chai!assert', 
    'intern/dojo/node!leadfoot/Command', 
    '../support/utils',
    '../support/pages/elementsPage',    
    '../support/pages/propertiesPage',
    '../support/pages/loginPage',
    '../support/pages/channelFilterPage',
    'require'
], function (bdd, assert, Command, utils, elementsPage, properties, loginPage, channelFilterPage, require) {
   
    var loginPage; 
    var channelFilterPage;

    bdd.describe('Channel Filter', function () {
        bdd.before(function () {
            loginPage = new loginPage(this.remote);
            channelFilterPage = new channelFilterPage(this.remote);
            return loginPage.loginWithIntroCookie();
        });

        bdd.after(function () {
            return loginPage.logout();
        });

        bdd.beforeEach(function () {
            //return loginPage.loginWithIntroCookie()
            //return this.remote
              //  .get(properties.CONSOLE_URL);
        });

        bdd.it('should filter on channel', function () {
            //this.skip();
            return channelFilterPage
                .setSingleFilter()
                .then(function (results) {
                    assert.equal(results, properties.CHANNEL_FILTER_RESULTS);
                });
        });

        bdd.it('should filter on multiple channels', function () {
            //this.skip();
            return channelFilterPage
                .setMultiFilters()
                .then(function (results) {
                    assert.equal(results, properties.MULTI_CHANNEL_FILTER_RESULTS);
                });
        });

        bdd.it('should clear a single filter option', function () {
            //this.skip();
            return channelFilterPage
                .clearSingleFilter()
                .then(function (results) {
                    assert.equal(results, properties.CHANNEL_FILTER_RESULTS);
                });
        });

        bdd.it('should clear multiple filter options', function () {
            //this.skip();
            return channelFilterPage
                .clearMultiFilters()
                .then(function (results) {
                    assert.equal(results, properties.DEFAULT_FILTER_RESULTS);
                });
        });

        bdd.it('should clear all filter options', function () {
            //this.skip();
            return channelFilterPage
                .clearAllFilters()
                .then(function (results) {
                    assert.equal(results, properties.DEFAULT_FILTER_RESULTS);
                });
        });

    });
});
           
