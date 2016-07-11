/**
 * Created by brendon.kelley on 6/11/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './elementsPage',
    './propertiesPage',
    './consoleElementsPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'intern/dojo/node!leadfoot/keys',
    'require'
], function (assert,utils,elements,properties,consoleElements,pollUntil,keys,require,results) {
    function consoleElementsPage(remote){
        this.remote=remote;
    }


    consoleElementsPage.prototype={
        constructor: consoleElementsPage,

        checkUpload: function(theTime)
        {
            var session=this.remote;
            return session
                //.get(consoleElements.SUBMISSION_URL)
                .get('https://scissors.feedmagnet.com/input/group/47/moderation/inbox/')
                .setFindTimeout(10000)
                .findByXpath(consoleElements.USERNAME_LOCATOR)
                    .click()
                    .type(properties.USERNAME)
                    .end()
                .findByXpath(consoleElements.PASSWORD_LOCATOR)
                    .click()
                    .type(properties.PASSWORD)
                    .end()
                .findByXpath(consoleElements.SUBMIT_BTN_LOCATOR)
                    .click()
                    .sleep(2000)
                    .end()
                .sleep(10000)
                .then(pollUntil('return document.getElementById("js-new-update-bar");', 10000))
                .getPageSource()

        }
        

    }; return consoleElementsPage
});
