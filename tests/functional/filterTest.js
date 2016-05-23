/**
 * Created by brendon.kelley on 5/23/16.
 */
define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/propertiesPage',
    '../support/pages/elementsPage',
    '../support/pages/betaTabElementsPage',
    '../support/pages/loginPage',
    '../support/pages/filterTestPage',
    'require'
], function (bdd,assert,Command,utils,properties,elements,betaProperties,loginPage,filterTestPage,require) {
    var loginPage;
    var filterTestPage;

    bdd.describe('Test moderation & tagging filters', function(){
        bdd.before(function(){
            loginPage = new loginPage(this.remote);
            filterTestPage= new filterTestPage(this.remote);
            return loginPage.loginWithIntroCookie();
        });

        bdd.beforeEach(function () {
            //return loginPage.loginWithIntroCookie();
        });

        bdd.after(function(){
            return loginPage.logout();
        });

        bdd.it('set moderation filter to approved', function(){
            return filterTestPage
                .setModeration()
                .then(function(results){
                    assert.equal(results,'53');
            });
        });

        bdd.it('cycle through each post,checking content', function(){
            return filterTestPage
                //.setModeration()
                .getContentMod()
                .then(function(results){
                    assert.equal(results,'Approved');
                })
                //.getContentTag()
                //.then(function(results){
                  //  assert.equal(results, 'Completed');
                //});
        })
    });

});