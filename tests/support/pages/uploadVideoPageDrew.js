/**
 * Created by brendon.kelley on 6/2/16.
 */
define([
    'intern/chai!assert',
    '../utils',
    './elementsPage',
    './propertiesPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert, utils, elements, properties, pollUntil, require) {
    function uploadVideoDrewPage(remote) {
        this.remote = remote;
    }

    uploadVideoDrewPage.prototype = {
        constructor: uploadVideoDrewPage,

        upload: function () {
            var session = this.remote;
            return session
                .get(properties.SUBMISSION_URL)
                .setFindTimeout(10000)
                .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR)
                .click()
                .sleep(2000)
                .end()
                .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR2)
                //.type(properties.VIDEO_UPLOAD_LOCATION)
                .type(require.toUrl('/Users/brendon.kelley/projects/bvleadfoot/tests/support/pages/testvid.mp4'))
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

    return uploadVideoDrewPage;
});