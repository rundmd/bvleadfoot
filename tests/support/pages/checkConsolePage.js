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

        /*upload:function()
        {
            var session=this.remote;
            var temp= "photo";
            return session
                .get(properties.SUBMISSION_URL)
                .setFindTimeout(10000)
                //.findById('UploadPhoto')
                //.findByXpath('//*[@id="index"]/div[2]/div[2]/div/div/div/div/label')
                //.click()
                // .end()
                .findById('UploadPhoto')
                .sleep(2000)
                //.then(function(){
                .type(require.toUrl('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png'))

                //.pressKeys(require.toUrl('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png'))
                // .pressKeys('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/BV_background_4_1440x900.png')

                .sleep(2000)
                .end()
                .then(function(){
                    return utils.fillUploadFormTest(session,temp);
                })
                .setFindTimeout(10000)

                .findByXpath('//*[@id="thanks"]/div[2]/div[2]/div/div/div/p')
                .getVisibleText()

        }*/
        
        checkUpload: function(theTime)
        {
            var session=this.remote;
            return session
                //.get(consoleElements.SUBMISSION_URL)
                .get('https://scissors.feedmagnet.com/input/group/47/moderation/inbox/')
                .setFindTimeout(10000)
                .findByXpath(consoleElements.USERNAME_LOCATOR)
                    .type(consoleElements.USERNAME)
                .findByXpath(consoleElements.PASSWORD_LOCATOR)
                    .type(consoleElements.PASSWORD)
                .findByXpath(consoleElements.SUBMIT_BTN_LOCATOR)
                    .click()
                    .sleep(2000)
                    .end()
                //.get(consoleElements.SUBMISSION_URL)
                .sleep(10000)
                //.findByXpath(consoleElements.post1_LOCATOR)
                .then(pollUntil('return document.getElementById("js-new-update-bar");', 10000))
                //.findByCssSelector('#moderation-moderate > div:nth-child(9) > div.update > div.right > strong')
                //.sleep(2000)
                //.getProperty("innerText")
                .getPageSource()

        }
        

    }; return consoleElementsPage
});