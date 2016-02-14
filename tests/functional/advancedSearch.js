define([
    'intern!bdd', 
    'intern/chai!assert', 
    'intern/dojo/node!leadfoot/Command', 
    '../support/utils',
    '../support/pages/pageElements',    
    '../support/pages/langFilterPage',
    '../support/pages/channelFilterPage',
    'require'
], function (bdd, assert, Command, utils, pageElements, langFilterPage, channelFilterPage, require) {
   
    var langFilterPage, channelFilterPage;

    bdd.describe('advanced search filters', function () {
        bdd.before(function () {
            langFilterPage = new langFilterPage(this.remote);
            channelFilterPage = new channelFilterPage(this.remote);
        });

        bdd.it('should filter on language', function () {
            return langFilterPage
                .addFilter()
                .then(function (results) {
                    assert.equal(results, pageElements.GERMAN_FILTER_RESULTS);
                });
        });

        bdd.it('should filter on channel', function () {
            return channelFilterPage
                .addFilter()
                .then(function (results) {
                    assert.equal(results, pageElements.INSTAGRAM_FILTER_RESULTS);
                });
        });
    });
});
           
