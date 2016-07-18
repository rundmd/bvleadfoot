/**
 * Created by brendon.kelley on 7/13/16.
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
    '../support/pages/testTestPage',
    'intern/dojo/node!mongodb',
    'require'
], function (bdd,assert,Command,utils,properties,elements,betaProperties,loginPage,testTestPage,monogo,require) {
    var loginPage;
    var testTestPage;

    var VIEWS = {
        // german: {text: 'german', clearLocator: elements.GERMAN_CLEAR_LOCATOR},
        //french: {text: 'french', clearLocator: elements.FRENCH_CLEAR_LOCATOR},
        post1: {post_mod: betaProperties.POST1_MODERATION_LOCATOR, post_icon: betaProperties.POST1_ICON_LOCATOR, post_tag: betaProperties.POST1_TAGGING_LOCATOR, post_close: betaProperties.CLOSE_BTN_LOCATOR},
        post2: {post_mod: betaProperties.POST2_MODERATION_LOCATOR, post_icon: betaProperties.POST2_ICON_LOCATOR, post_tag: betaProperties.POST2_TAGGING_LOCATOR, post_close: betaProperties.CLOSE2_BTN_LOCATOR},
        post3: {post_mod: betaProperties.POST3_MODERATION_LOCATOR, post_icon: betaProperties.POST3_ICON_LOCATOR, post_tag: betaProperties.POST3_TAGGING_LOCATOR, post_close: betaProperties.CLOSE_BTN_LOCATOR}
    };

    /*var MongoClient = require('mongodb').MongoClient;
    var assert = require('assert');
    var ObjectId = require('mongodb').ObjectID;
    var url = 'mongodb://localhost:27017';*/
    var MongoClient = require('intern/dojo/node!mongodb').MongoClient;
    //var assert = require('assert');
    var ObjectId = require('intern/dojo/node!mongodb').ObjectID;
    var url = 'mongodb://localhost:27017';
    var aggregateRestaurants = function(db, callback) {
        db.collection('testTest').aggregate(
            [
                { $group: { "_id": "$team", "count": { $sum: 1 } } }
            ]).toArray(function(err, result) {
            assert.equal(err, null);
            console.log(result);
            callback(result);
        });
    };
    var tom;
    var testing;
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
         tom=db.collection('testTest').aggregate(
            [
                { $group: { "_id": "$team", "count": { $sum: 1 } } }
            ]).toArray(function(err, result) {
            assert.equal(err, null);
            //console.log(result);
             testing=result;
        });

        db.close();

    });
    bdd.describe('Test moderation & tagging filters', function(testing){
        bdd.before(function(){
            testTestPage=new testTestPage(this.remote);
            console.log(testing)
        });


        for(i=0; i<VIEWS.length;i++) {
            // hit mongo endpoitnt 
            bdd.it('test lang translation for '+i, function(){
                return testTestPage
                    .langTest(lang)
            })
        }
        
    });
    
    
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
    
});