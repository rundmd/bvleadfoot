define([
    'intern!bdd', 
    'intern/chai!assert', 
    'intern/dojo/node!leadfoot/Command', 
    '../support/utils',
    '../support/pages/propertiesPage',
    '../support/pages/loginPage',
    '../support/pages/multipleFiltersPage',
    'require'
], function (bdd, assert, Command, utils, properties, loginPage, multipleFiltersPage, require) {
   
    var loginPage; 
    var multipleFiltersPage;

    bdd.describe('Mulitple Filters', function () {
        bdd.before(function () {
            loginPage = new loginPage(this.remote);
            multipleFiltersPage = new multipleFiltersPage(this.remote);
            return loginPage.loginWithIntroCookie();
            //return loginPage.login();
        });

        bdd.after(function () {
            return loginPage.logout();
        });

        bdd.beforeEach(function () {
            //return loginPage.loginWithIntroCookie()
            //return this.remote
              //  .get(properties.CONSOLE_URL);
        });

        bdd.it('should filter on a combination of channels(channel, language, attachment)', function () {
            //this.skip();
            return multipleFiltersPage
                .setCombinationFilter1()
                .then(function (results) {
                    assert.equal(results, properties.COMBINATION1_FILTER_RESULTS);
                });
        });

        bdd.it('should filter on combination of channels(channel, rm, moderation, tagging, display)', function () {
            //this.skip();
            return multipleFiltersPage
                .setCombinationFilter2()
                .then(function (results) {
                    assert.equal(results, properties.COMBINATION2_FILTER_RESULTS);
                });
        });

    });
});
           
