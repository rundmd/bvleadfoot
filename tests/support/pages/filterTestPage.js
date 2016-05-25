/**
 * Created by brendon.kelley on 5/23/16.
 */

define([
    'intern/dojo/node!leadfoot/keys',
    '../utils',
    './elementsPage',
    './propertiesPage',
    './betaTabElementsPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
    
], function(keys,utils,elements,properties,betaProperties,pollUntil,require){
        function filterTestPage(remote){
            this.remote=remote;
        }

    var FILTERS = {
       // german: {text: 'german', clearLocator: elements.GERMAN_CLEAR_LOCATOR},
        //french: {text: 'french', clearLocator: elements.FRENCH_CLEAR_LOCATOR},
        approved: {text: 'approved', clearLocator: betaProperties.APPROVED_CLEAR_LOCATOR},
        completed: {text: 'completed', clearLocator: betaProperties.COMPLETED_FLITER_LOCATOR}
    };

    var VIEWS = {
        // german: {text: 'german', clearLocator: elements.GERMAN_CLEAR_LOCATOR},
        //french: {text: 'french', clearLocator: elements.FRENCH_CLEAR_LOCATOR},
        0: {post_mod: betaProperties.POST1_MODERATION_LOCATOR, post_icon: betaProperties.POST1_ICON_LOCATOR, post_tag: betaProperties.POST1_TAGGING_LOCATOR, post_close: betaProperties.CLOSE_BTN_LOCATOR},
        1: {post_mod: betaProperties.POST2_MODERATION_LOCATOR, post_icon: betaProperties.POST2_ICON_LOCATOR, post_tag: betaProperties.POST2_TAGGING_LOCATOR, post_close: betaProperties.CLOSE2_BTN_LOCATOR},
        2: {post_mod: betaProperties.POST3_MODERATION_LOCATOR, post_icon: betaProperties.POST3_ICON_LOCATOR, post_tag: betaProperties.POST3_TAGGING_LOCATOR, post_close: betaProperties.CLOSE_BTN_LOCATOR}
    };
    
    filterTestPage.prototype={
        constructor: filterTestPage,

        setModeration: function(){
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
                .getVisibleText();

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
                    .end()*/
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
        
        checkMod: function(number){
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
                .getProperty("innerText")
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
            
        }

    }; return filterTestPage;
});