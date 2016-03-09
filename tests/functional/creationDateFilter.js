define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/elementsPage',
    '../support/pages/loginPage',
    '../support/pages/creationDateFilterPage',
    'require'
], function (bdd, assert, Command, utils, elementsPage, loginPage, creationDateFilterPage, require) {

    var loginPage, creationDateFilterPage;

    bdd.describe('Creation Date Filter', function () {
        bdd.before(function () {
            loginPage = new loginPage(this.remote);
            creationDateFilterPage = new creationDateFilterPage(this.remote);
        });

        bdd.beforeEach(function () {
            //return loginPage.login();
        });

        bdd.it('should filter on the last day', function () {
            //this.skip();
            return creationDateFilterPage
                .lastDay()
                .then(function (results) {
                    assert.equal(results, creationDateFilterPage.RESULTS_LAST_DAY);
                });
        });

        bdd.it('should filter on the last 7  days', function () {
            return creationDateFilterPage
                .last7Days()
                .then(function (results) {
                    assert.equal(results, creationDateFilterPage.RESULTS_7_DAYS);
                });
        });

        bdd.it('should filter on the last 30 days', function () {
            //this.skip();
            return creationDateFilterPage
                .last30Days()
                .then(function (results) {
                    assert.equal(results, creationDateFilterPage.RESULTS_30_DAYS);
                });
        });

        bdd.it('should filter on custom date range', function () {
            return creationDateFilterPage
                .custom()
                .then(function (results) {
                    assert.equal(results, creationDateFilterPage.CUSTOM_RESULTS);
                });
        });
    });
});
