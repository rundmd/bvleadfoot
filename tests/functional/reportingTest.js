/**
 * Created by brendon.kelley on 6/16/16.
 */
define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/propertiesPage',
    '../support/pages/elementsPage',
    '../support/pages/reportPropertiesPage',
    '../support/pages/loginPage',
    '../support/pages/reportingTestPage',
    'require'
], function (bdd,assert,Command,utils,properties,elements,reportProperties,loginPage,reportingTestPage,require) {
    var loginPage;
    var reportingTestPage;

    /*var VIEWS = {
        // german: {text: 'german', clearLocator: elements.GERMAN_CLEAR_LOCATOR},
        //french: {text: 'french', clearLocator: elements.FRENCH_CLEAR_LOCATOR},
        post1: {post_mod: betaProperties.POST1_MODERATION_LOCATOR, post_icon: betaProperties.POST1_ICON_LOCATOR, post_tag: betaProperties.POST1_TAGGING_LOCATOR, post_close: betaProperties.CLOSE_BTN_LOCATOR},
        post2: {post_mod: betaProperties.POST2_MODERATION_LOCATOR, post_icon: betaProperties.POST2_ICON_LOCATOR, post_tag: betaProperties.POST2_TAGGING_LOCATOR, post_close: betaProperties.CLOSE2_BTN_LOCATOR},
        post3: {post_mod: betaProperties.POST3_MODERATION_LOCATOR, post_icon: betaProperties.POST3_ICON_LOCATOR, post_tag: betaProperties.POST3_TAGGING_LOCATOR, post_close: betaProperties.CLOSE_BTN_LOCATOR}
    };*/

    /*bdd.describe('Test moderation & tagging filters', function(){
     bdd.before(function(){
     loginPage = new loginPage(this.remote);
     filterTestPage= new filterTestPage(this.remote);
     return loginPage.loginWithIntroCookie();
     });

     bdd.beforeEach(function () {
     //return loginPage.loginWithIntroCookie();
     });

     bdd.after(function(){
     //return loginPage.logout();
     });

     bdd.it('set moderation filter to approved', function(){
     //this.skip;
     return filterTestPage
     .setModeration()
     .then(function(results){
     assert.equal(results,'53');
     });
     });

     bdd.it('post1', function(){
     return filterTestPage
     .checkModAndTag(0)

     });
     bdd.it('post2', function(){
     return filterTestPage
     .checkModAndTag(1)

     });

     bdd.it('post3', function(){
     return filterTestPage
     .checkModAndTag(2)
     });


     });*/

    bdd.describe('Testing different filters', function(){

        bdd.before(function(){
            //loginPage = new loginPage(this.remote);
            //filterTestPage= new filterTestPage(this.remote);
            //return loginPage.loginWithIntroCookie();

            reportingTestPage= new reportingTestPage(this.remote);

        });

        /*bdd.it('set moderation filter to approved', function(){
         //this.skip;
         return filterTestPage
         .changeFilters()
         .then(function(results){
         assert.equal(results,'53');
         });
         });*/

        bdd.it('change format and check post1', function(){
            return reportingTestPage
                .setDates();
        });


    });

});