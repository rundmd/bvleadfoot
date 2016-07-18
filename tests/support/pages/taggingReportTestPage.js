/**
 * Created by brendon.kelley on 6/23/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './elementsPage',
    './propertiesPage',
    './tagReportPropertiesPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'intern/dojo/node!leadfoot/keys',
    'require'
], function (assert,utils,elements,properties,tagReportProperties,pollUntil,keys,require,results) {
    function taggingReportTestPage(remote){
        this.remote=remote;
    }


    taggingReportTestPage.prototype={
        constructor: taggingReportTestPage,
        
        setFilters: function(){
            var session=this.remote;
            return session
                .get(tagReportProperties.ANALYTICS_URL)
                .setFindTimeout(10000)
                .findByXpath(tagReportProperties.USERNAME_LOCATOR)
                    .type(tagReportProperties.USERNAME)
                    .end()
                .findByXpath(tagReportProperties.PASSWORD_LOCATOR)
                    .type(tagReportProperties.PASSWORD)
                    .end()
                .findByXpath(tagReportProperties.SUBMIT_BTN_LOCATOR)
                    .click()
                    .sleep(2000)
                    .end()
                .findByXpath(tagReportProperties.GROUP_FILTER_LOCATOR)
                    .click()
                .findByXpath(tagReportProperties.GROUP_FILTER_VALUE)
                    .click()
                    .end()
                    .end()
                .findByXpath(tagReportProperties.MINIMUN_COUNT_LOCATOR)
                    .click()
                    .then(function(){
                        session.pressKeys(keys.BACKSPACE);
                    })
                    .type(tagReportProperties.MIN_COUNT)
                    .end()
                .findByXpath(tagReportProperties.SEARCH_FILTER_LOCATOR)
                    .type(tagReportProperties.SEARCH_TAGS)
                    .end()

        },
        
        getResults: function(){
            var session=this.remote;
            return session
                .findByXpath(tagReportProperties.RESULTS_LOCATOR)
                .sleep(2000)
                .getVisibleText()
        }


    }; return taggingReportTestPage
});