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

    var VIEWS = {
        // german: {text: 'german', clearLocator: elements.GERMAN_CLEAR_LOCATOR},
        //french: {text: 'french', clearLocator: elements.FRENCH_CLEAR_LOCATOR},
        post1: {post_mod: betaProperties.POST1_MODERATION_LOCATOR, post_icon: betaProperties.POST1_ICON_LOCATOR, post_tag: betaProperties.POST1_TAGGING_LOCATOR, post_close: betaProperties.CLOSE_BTN_LOCATOR},
        post2: {post_mod: betaProperties.POST2_MODERATION_LOCATOR, post_icon: betaProperties.POST2_ICON_LOCATOR, post_tag: betaProperties.POST2_TAGGING_LOCATOR, post_close: betaProperties.CLOSE2_BTN_LOCATOR},
        post3: {post_mod: betaProperties.POST3_MODERATION_LOCATOR, post_icon: betaProperties.POST3_ICON_LOCATOR, post_tag: betaProperties.POST3_TAGGING_LOCATOR, post_close: betaProperties.CLOSE_BTN_LOCATOR}
    };

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

        bdd.it('cycle through each post,checking content', function(){

            //var results= filterTestPage.checkMod(0)
            //var results2 = filterTestPage.checkTag(0)
            filterTestPage.checkMod(0).then(function(results){
                //assert.equal(results, 'Approved')
                if(results=='Approved')
                {
                    filterTestPage.checkTag(0).then(function(results1){
                         assert.equal(results1,'completed')
                    })
                }
                else
                {
                     assert.equal(results,'approved')
                }

            });
            //assert.equal(filterTestPage.checkMod(0),'Approved')
            //assert.equal(results2, 'Completed');
           // return filterTestPage
                //.checkMod(0)
                
                /*.then(function (results) {
                    //assert.equal(results, 'Approved')
                    filterTestPage.checkTag(0)
                            .then(function(resultss){
                            assert.equal(resultss, 'completed');
                        })
                   // assert.equal(results, 'Approved')

                });

               /* .then(function(){filterTestPage.checkTag(0).then(function(results){
                    assert.equal(results, 'completed');
                })
                });*/
                /*.then(function(){filterTestPage.closeIt(0)
                })

                .then(function(){filterTestPage.checkMod(1).then(function (results) {
                    assert.equal(results, 'Approved')

                })})


                .then(function(){filterTestPage.checkTag(1).then(function(results){
                    assert.equal(results, 'Completed');
                })
                })

                .then(function(){filterTestPage.checkMod(2).then(function (results) {
                    assert.equal(results, 'Approved')

                })})


                .then(function(){filterTestPage.checkTag(2).then(function(results){
                    assert.equal(results, 'Completed');
                })
                });*/

                /*.then(function (results) {
                    assert.equal(results, 'Completed');
                });*/
                //.closeIt(0);
            
        });
    });

});