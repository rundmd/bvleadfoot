define([
    'intern/chai!assert',
    '../utils', 
    './elementsPage', 
    './propertiesPage', 
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert, utils, elements, properties, pollUntil, require) {
    function uploadPhotoPage(remote) {
        this.remote = remote;
    }

    uploadPhotoPage.prototype = {
        constructor: uploadPhotoPage,
       
        upload: function () {
            var session = this.remote;
            return session
                .get(properties.SUBMISSION_URL)
                .setFindTimeout(20000)
                .findById(elements.UPLOAD_PHOTO_BTN_ID)
                    .type(properties.PHOTO_UPLOAD_LOCATION)
                    .sleep(1000)
                    .end()
                .then(function () { 
                    return utils.fillUploadForm(session);
                })
                .findByXpath('//*[@id="thanks"]/div[2]/div[2]/div/div/div/p')
                .getVisibleText();
        }

    };

    return uploadPhotoPage;
});

