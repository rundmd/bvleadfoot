define([
    'intern/chai!assert',
    '../utils', 
    './elementsPage', 
    './propertiesPage', 
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert, utils, elements, properties, pollUntil, require) {
    function uploadVideoPage(remote) {
        this.remote = remote;
    }

    uploadVideoPage.prototype = {
        constructor: uploadVideoPage,
       
        upload: function () {
            var session = this.remote;
            return session
                .get(properties.SUBMISSION_URL)
                .setFindTimeout(properties.VIDEO_UPLOAD_TIMEOUT)
                .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR)
                    .click()
                    .sleep(2000)
                    .end()
                .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR2)
                    .type(properties.VIDEO_UPLOAD_LOCATION)
                    .sleep(12000)
                    .end()
                .findByXpath(elements.UPLOAD_VIDEO_COMMENT_LOCATOR)
                    .type('testingtesting')    
                    .sleep(1000)
                    .end()
                .findByXpath(elements.UPLOAD_VIDEO_NICKNAME_LOCATOR)
                    .click()
                    .type('tester')
                    .sleep(1000)
                    .end()
                .findById(elements.UPLOAD_TC_ID)
                    .click()
                    .sleep(1000)
                    .end()
                .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
                    .click()
                    .sleep(2000)
                    .end()
                .findByXpath('//*[@id="thanks"]/div[2]/div[2]/div/div/div/p')
                .getVisibleText();
        }

    };

    return uploadVideoPage;
});

