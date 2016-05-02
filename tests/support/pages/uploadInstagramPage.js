define([
    'intern/chai!assert',
    '../utils', 
    './elementsPage', 
    './propertiesPage', 
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert, utils, elements, properties, pollUntil, require) {
    function uploadInstagramPage(remote) {
        this.remote = remote;
    }

    uploadInstagramPage.prototype = {
        constructor: uploadInstagramPage,
       
        upload: function () {
            var session = this.remote;
            var handle;

            return session
                .get(properties.SUBMISSION_URL)
                .findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR)
                    .click()
                    .sleep(2000)
                    .end()
                .findByXpath(elements.UPLOAD_INSTA_CONTENT_PHOTO)
                    .click()
                    .sleep(2000)
                    .end()
                .then(function () {
                    return utils.fillUploadForm(session);
                })
                .setFindTimeout(10000)
                .findByXpath('//*[@id="thanks"]/div[2]/div[2]/div/div/div/p')
                .getVisibleText();
        }

    };

    return uploadInstagramPage;
});

