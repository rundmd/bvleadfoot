/**
 * Created by brendon.kelley on 6/16/16.
 */
define([
    'intern/dojo/node!leadfoot/keys',
    '../utils',
    './elementsPage',
    './propertiesPage',
    './reportPropertiesPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'intern/chai!assert',
    'require'

], function(keys,utils,elements,properties,reportProperties,pollUntil,assert,require){
    function reportingTestPage(remote){
        this.remote=remote;
    }

    /*var FILTERS = {
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

    var FILTERS= {
        startMonth: {value: '2'},
        startDay: {value: '21' },
        startYear: {value: '2002'},
        EndMonth: {value: '5'},
        EndDay: {value: '3'},
        EndYear: {value: '2003'},
        client: 'https://frodo.feedmagnet.com/analytics/reports/content-funnel-by-group/'


    };*/

    reportingTestPage.prototype={
        constructor: reportingTestPage,

        setDates: function(){
          var session=this.remote;
            return session
                .get(reportProperties.ANALYTICS_URL)
                .setFindTimeout(10000)
                .findByXpath(reportProperties.USERNAME_LOCATOR)
                    .type(reportProperties.USERNAME)
                    .end()
                .findByXpath(reportProperties.PASSWORD_LOCATOR)
                    .type(reportProperties.PASSWORD)
                 .end()
                .findByXpath(reportProperties.SUBMIT_BTN_LOCATOR)
                    .click()
                    .sleep(2000)
                    .end()
                //.findByXpath(reportProperties.START_MONTH_LOCATOR)
                .sleep(5000)
                .findByXpath(reportProperties.START_MONTH_LOCATOR)
                    .click()
                    .sleep(2000)
                     //.end()
                .findByXpath(reportProperties.START_MONTH)
                    .click()
                    .sleep(2000)
                    .end()
                    .end()
                .sleep(2000)
                .findByXpath(reportProperties.START_DAY_LOCATOR)
                    .click()
                    .then(function(){
                    for(i=0; i<2; i++)
                    {
                        session.pressKeys(keys.BACKSPACE);
                    }
                    //return session.pressKeys(keys.RETURN)
                        session.pressKeys(reportProperties.START_DAY);
                        return session.pressKeys(keys.RETURN)

                    })
                    .end()
                .findByXpath(reportProperties.START_YEAR_LOCATOR)
                    .click()
                    .then(function(){
                        for(i=0; i<4; i++)
                        {
                            session.pressKeys(keys.BACKSPACE);
                        }

                        session.pressKeys(reportProperties.START_YEAR);
                        return session.pressKeys(keys.RETURN)

                    })
                    .end()

                .findByXpath(reportProperties.END_MONTH_LOCATOR)
                    .click()
                    .sleep(2000)

                    .findByXpath(reportProperties.END_MONTH)
                        .click()
                        .sleep(2000)
                        .end()
                    .end()
                .sleep(2000)
                .findByXpath(reportProperties.END_DAY_LOCATOR)
                    .click()
                    .then(function(){
                        for(i=0; i<2; i++)
                        {
                            session.pressKeys(keys.BACKSPACE);
                        }
                    //return session.pressKeys(keys.RETURN)
                        session.pressKeys(reportProperties.END_DAY);
                        return session.pressKeys(keys.RETURN)

                    })
                    .end()
                .findByXpath(reportProperties.END_YEAR_LOCATOR)
                    .click()
                    .then(function(){
                        for(i=0; i<4; i++)
                        {
                            session.pressKeys(keys.BACKSPACE);
                        }

                        session.pressKeys(reportProperties.END_YEAR);
                        return session.pressKeys(keys.RETURN)

                    })
                    .end()

                .findByXpath(reportProperties.SUBMIT_FILTER_LOCATOR)
                    .click()
                    .end()
                .sleep(5000)
                
                
                

        },
        
        checkTotalCollected: function()
        {
            var session=this.remote;
            return session
                .findByXpath(reportProperties.TOTAL_COLLECTED_LOCATOR)
                .getProperty('innerText')
            
            
        },
        
        sentForBvMod: function(){
            var session=this.remote;
            return session
                .findByXpath(reportProperties.SENT_FOR_BV_MOD_LOCATOR)
                .getProperty('innerText')
            
        },
        
        bvModApproved: function(){
            var session=this.remote;
            return session
                .findByXpath(reportProperties.BV_MOD_APPROVED_LOCATOR)
                .getProperty('innerText')
        
        },
        
        manApproved: function(){
            var session=this.remote;
            return session
                .findByXpath(reportProperties.MANUALLY_APPROVED_LOCATOR)
                .getProperty('innerText')
        },

        bvProductTagged: function(){
            var session=this.remote;
            return session
                .findByXpath(reportProperties.BV_PRODUCT_TAGGED_LOCATOR)
                .getProperty('innerText')
        },

        sentForRm: function(){
            var session=this.remote;
            return session
                .findByXpath(reportProperties.SENT_FOR_RM_LOCATOR)
                .getProperty('innerText')
        },

        rmApproved: function(){
            var session=this.remote;
            return session
                .findByXpath(reportProperties.RM_APPROVE_LOCATOR)
                .getProperty('innerText')
        }
        
        

        

    }; return reportingTestPage;
});