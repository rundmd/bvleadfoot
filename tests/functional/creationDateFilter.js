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

        bdd.it('should filter on custom date range', function () {
            return creationDateFilterPage
                .custom()
                .then(function (results) {
                    assert.equal(results, creationDateFilterPage.CUSTOM_RESULTS);
                });
        });
    });
});
