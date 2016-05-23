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
            var session=this.remote;
            return session
                .setFindTimeout(10000)
                .findByXpath(betaProperties.POST1_ICON_LOCATOR)
                    .click()
                    .sleep(2000)
                    .end()
                //.findByXpath(betaProperties.POST1_MODERATION_LOCATOR)
                .findByXpath('/html/body/div[2]/div/div[2]/div/div/div[2]/div[1]/table/tbody/tr[1]/td/span')
                .getVisibleText();


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
        }

    }; return filterTestPage;
});