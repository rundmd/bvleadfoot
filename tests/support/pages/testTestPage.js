/**
 * Created by brendon.kelley on 7/13/16.
 */
define([
    'intern/dojo/node!leadfoot/keys',
    '../utils',
    './elementsPage',
    './propertiesPage',
    './testPropertiesPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'intern/chai!assert',
    'require'

], function(keys,utils,elements,properties,testProperties,pollUntil,assert,require){
    function testTestPage(remote){
        this.remote=remote;
    }

   /* var FILTERS = {
        // german: {text: 'german', clearLocator: elements.GERMAN_CLEAR_LOCATOR},
        //french: {text: 'french', clearLocator: elements.FRENCH_CLEAR_LOCATOR},
        approved: {text: 'approved', clearLocator: betaProperties.APPROVED_CLEAR_LOCATOR},
        completed: {text: 'completed', clearLocator: betaProperties.COMPLETED_FLITER_LOCATOR}
    };*/

    var VIEWS = {
        // german: {text: 'german', clearLocator: elements.GERMAN_CLEAR_LOCATOR},
        //french: {text: 'french', clearLocator: elements.FRENCH_CLEAR_LOCATOR},
        0: {de_De: "de_De"},
        1: {de_De:"de_De"},
        2: {de_De:"de_De"}
    };

    var VIEWSS = {
        // german: {text: 'german', clearLocator: elements.GERMAN_CLEAR_LOCATOR},
        //french: {text: 'french', clearLocator: elements.FRENCH_CLEAR_LOCATOR},
        0: {url: "https://www.instagram.com/patriots/"},
        1: {url:"http://www.patriots.com/"}
    };

    // 0: "de"
    //   1: "fr"

    testTestPage.prototype={
        constructor: testTestPage,


        langTest:function(locale){
            var session=this.remote;
            //return session
            var it=locale;
            return session
                .get(testProperties.lang[it].SUBMISSION_URL)
                /*.then(function(session){ 
                    return utils.uploadPhoto1(session,locale);
                })*/
                .sleep(2000)
                .setFindTimeout(10000)
                .findByXpath(testProperties.UPLOAD_PHOTO_ID)
                .type('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')
                .end()
                .findByXpath(testProperties.COMMENT_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, testProperties.lang[it].COMMENT_TEXT)
                })
                .findByXpath(testProperties.NICKNAME_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, testProperties.lang[it].NICKNAME_TEXT)
                })
                .findByXpath(testProperties.RM_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, testProperties.lang[it].RIGHTS_MANG_TEXT)
                })
                .findByXpath(testProperties.SUBMIT_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, testProperties.lang[it].POST_BTN_TEXT)
                })
                .findByXpath(testProperties.BACK_BTN_LOCATOR)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, testProperties.lang[it].BACK_BTN_TEXT)
                })
            }





        //},



        /*setModeration: function(){
            var session= this.remote;
            return session
                .get(betaProperties.CONSOLE_URL)
                .findByXpath(betaProperties.BETA_TAB_LOCATOR)
                .click()
                .sleep(2000)
                .end()
                .findByXpath(betaProperties.POP_UP_LOCATOR)
                .click()
                .sleep(2000)
                .end()
                .then(pollUntil('return document.getElementById("btn-filters");', 10000))
                .findById('btn-filters')
                .click()
                .sleep(2000)
                .end()
                .findByXpath(betaProperties.MODERATION_FILTER_LOCATOR)
                .click()
                .end()
                .then(function(){
                    for(i=0; i<2; i++)
                    {
                        session.pressKeys(keys.ARROW_DOWN);
                    }
                    return session.pressKeys(keys.RETURN)

                })
                .then(function(){
                    for(i=0; i<2; i++)
                    {
                        session.pressKeys(keys.ARROW_DOWN);
                    }
                    return session.pressKeys(keys.RETURN)

                })


                .sleep(2000)
                .findByXpath(betaProperties.RESULTS_COUNT_LOCATOR)
                .getVisibleText()



        },

        getContentMod: function() {
            /*var session=this.remote;
             return session
             /*.setFindTimeout(10000)
             .findByXpath(betaProperties.POST1_ICON_LOCATOR)
             .click()
             .sleep(2000)
             .end()
             //.findByXpath(betaProperties.POST1_MODERATION_LOCATOR)
             //.findByXpath('/html/body/div[2]/div/div[2]/div/div/div[2]/div[1]/table/tbody/tr[1]/td/span')
             //.findByCssSelector('body > div:nth-child(6) > div > div.advanced-search.public-details.fade.in.modal > div > div > div.modal-body > div.workflow > table > tbody > tr:nth-child(1) > td > span')
             //.getProperty("innerText")
             //.getVisibleText();
             .sleep(5000)
             .findByXpath(betaProperties.CLOSE_BTN_LOCATOR)
             .click()
             .end()
            var session=this.remote;
            return session
                    .findDisplayedByXpath('id("content")/DIV/SECTION[1]/DIV[2]/DIV[2]/DIV[1]/DIV[1]/DIV[1]/DIV[3]/DIV/BUTTON[1]/I')
                    .click()
                    .sleep(2000)
                    .end()
                //.findDisplayedByXpath('/HTML/BODY[1]/DIV[2]/DIV/DIV[2]/DIV/DIV/DIV[2]/DIV[2]/TABLE[1]/TBODY/TR[2]/TD[1]/A[1]/SPAN[2]')
                /html/body/div[3]/div/div[2]/div/div/div[2]/div[1]/table/tbody/tr[1]/td/span
                    .findDisplayedByXpath('/html/body/div[2]/div/div[2]/div/div/div[2]/div[1]/table/tbody/tr[1]/td/span')
                    //.click()
                    .sleep(5000)
                    //.end()
                    .getProperty("innerText")


        },

        getContentTag: function(){
            var session= this.remote;
            return session
            //.findByXpath(betaProperties.POST1_ICON_LOCATOR)
            // .click()
            // .sleep(2000)
            // .end()
            //.findByXpath(betaProperties.POST1_TAGGING_LOCATOR)
                .findByXpath('/html/body/div[2]/div/div[2]/div/div/div[2]/div[1]/table/tbody/tr[2]/td/span')
                .getVisibleText();
        },

        checkModAndTag: function(number){
            var session= this.remote;
            return session
                .findDisplayedByXpath(VIEWS[number].post_icon)
                .click()
                .sleep(2000)
                .end()
                .findDisplayedByXpath(VIEWS[number].post_mod)
                //.click()
                .sleep(5000)
                //.end()
                .getProperty("innerText").then(function(results){
                    assert.equal(results,'Approved')
                })
                .sleep(2000)
                .findDisplayedByXpath(VIEWS[number].post_tag)
                .sleep(2000)
                .getProperty("innerText").then(function(results){
                    assert.equal(results, 'Completed')
                })
                .findDisplayedByXpath(VIEWS[number].post_close)
                .click()
                .sleep(2000)
                .end()

        },

        checkTag: function(number){
            var session=this.remote;
            console.log('we are here');
            return session

                .findDisplayedByXpath(VIEWS[number].post_icon)
                .click()
                .sleep(2000)
                .end()
                .findDisplayedByXpath(VIEWS[number].post_tag)
                .sleep(2000)
                .getProperty("innerText")
        },

        closeIt: function(number){
            var session=this.remote;
            return session
                .findDisplayedByXpath(VIEWS[number].post_close)
                .click()
                .sleep(2000)
                .end()

        },

        changeFilters: function(){
            var session= this.remote;
            return session
                .get(betaProperties.CONSOLE_URL)
                .findByXpath(betaProperties.BETA_TAB_LOCATOR)
                .click()
                .sleep(2000)
                .end()
                .sleep(5000)
                .findByXpath(betaProperties.POP_UP_LOCATOR)
                .click()
                .sleep(2000)
                .end()
                .sleep(2000)
                .then(pollUntil('return document.getElementById("btn-filters");', 10000))
                .findById('btn-filters')
                .click()
                .sleep(2000)
                .end()
                .findByXpath(betaProperties.MODERATION_FILTER_LOCATOR)
                .click()
                .sleep(2000)
                .then(function(){
                    session.pressKeys('approved')
                    return session.pressKeys(keys.RETURN)
                })
                .sleep(2000)
                .then(function(){
                    session.pressKeys('qdddd')
                    return session.pressKeys(keys.RETURN)
                })
                .sleep(2000)
                .sleep(2000)
                .findByXpath(betaProperties.RESULTS_COUNT_LOCATOR)
                .getVisibleText()
        },

        changeFormat: function(){
            var session=this.remote;
            return session
                .get(betaProperties.CONSOLE_URL)
                .setFindTimeout(10000)
                .findByXpath(betaProperties.BETA_TAB_LOCATOR)
                .click()
                .sleep(2000)
                .end()
                .sleep(5000)
                .findByXpath(betaProperties.POP_UP_LOCATOR)
                .click()
                .sleep(2000)
                .end()
                .sleep(2000)
                .then(pollUntil('return document.getElementById("btn-filters");', 10000))
                /*.findById('btn-filters')
                 .click()
                 .sleep(2000)
                 .end()
                 .findByXpath(betaProperties.MODERATION_FILTER_LOCATOR)
                 .click()
                 .sleep(2000)
                 .then(function(){
                 session.pressKeys('approved')
                 return session.pressKeys(keys.RETURN)
                 })
                 .sleep(2000)
                 .then(function(){
                 session.pressKeys('qdddd')
                 return session.pressKeys(keys.RETURN)
                 })
                 .setFindTimeout(10000)
                 /*.findByXpath(betaProperties.FORMAT_BTN_LOCATOR)
                 .moveMouseTo(7.1875, 3)
                 .clickMouseButton(0)
                 .sleep(2000)
                 .end()
                .findByXpath('id("content")/DIV/SECTION[1]/DIV[2]/DIV[1]/DIV[2]/DIV[2]/DIV[1]/BUTTON[1]/I[1]')
                .moveMouseTo(8.1875, 9)
                .clickMouseButton(0)
                .sleep(2000)
                .findByXpath(betaProperties.POST1_MODERATION_VIEWS_LOCATOR)
                .sleep(2000)
                .getProperty("innerText")

        }*/

    }; return testTestPage;
});