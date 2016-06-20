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
                    /*.then(function(){
                    for(i=0; i<3; i++)
                    {
                        session.pressKeys(keys.ARROW_DOWN);
                    }
                       // return session.pressKeys(keys.ENTER)
                    return session.pressKeys(keys.RETURN)

                })*/
                     .end()
                .findByXpath('//*[@id="id_start_month"]/option[8]')
                    .click()
                    .end()
                .findByXpath(reportProperties.SUBMIT_FILTER_LOCATOR)
                    .click()
                    .end()
                .sleep(5000)
                
                
                

        },

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



        },*/

        

    }; return reportingTestPage;
});