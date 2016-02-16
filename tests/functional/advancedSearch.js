define([
    'intern!bdd', 
    'intern/chai!assert', 
    'intern/dojo/node!leadfoot/Command', 
    '../support/utils',
    '../support/pages/elementsPage',    
    '../support/pages/loginPage',
    '../support/pages/langFilterPage',
    '../support/pages/multiLangFilterPage',
    '../support/pages/channelFilterPage',
    '../support/pages/multiChannelFilterPage',
    'require'
], function (bdd, assert, Command, utils, elementsPage, loginPage, langFilterPage, multiLangFilterPage, channelFilterPage, multiChannelFilterPage, require) {
   
    var loginPage, langFilterPage, channelFilterPage;

    bdd.describe('advanced search filters', function () {
        bdd.before(function () {
            loginPage = new loginPage(this.remote);
            langFilterPage = new langFilterPage(this.remote);
            multiLangFilterPage = new multiLangFilterPage(this.remote);
            channelFilterPage = new channelFilterPage(this.remote);
            multiChannelFilterPage = new multiChannelFilterPage(this.remote);
        });

        bdd.beforeEach(function () {
            //return loginPage.login();
        });

        bdd.it('should filter on language', function () {
            //this.skip();
            return langFilterPage
                .addFilter()
                .then(function (results) {
                    assert.equal(results, elementsPage.LANG_FILTER_RESULTS);
                });
        });

        bdd.it('should filter on multiple languages', function () {
            //this.skip();
            return multiLangFilterPage 
                .addFilter()
                .then(function (results) {
                    assert.equal(results, elementsPage.MULTI_LANG_FILTER_RESULTS);
                });
        });

        bdd.it('should filter on channel', function () {
            //this.skip();
            return channelFilterPage
                .addFilter()
                .then(function (results) {
                    assert.equal(results, elementsPage.CHANNEL_FILTER_RESULTS);
                });
        });

        bdd.it('should filter on multiple channels', function () {
            //this.skip();
            return multiChannelFilterPage
                .addFilter()
                .then(function (results) {
                    assert.equal(results, elementsPage.MULTI_CHANNEL_FILTER_RESULTS);
                });
        });
    });
});
           
