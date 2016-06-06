/**
 * Created by brendon.kelley on 6/2/16.
 */
define([
    'intern!bdd',
    'intern/chai!assert',
    'intern/dojo/node!leadfoot/Command',
    '../support/utils',
    '../support/pages/elementsPage',
    '../support/pages/propertiesPage',
    '../support/pages/uploadVideoPageDrew',
    'require'
], function (bdd, assert, Command, utils, elements, properties, uploadVideoPageDrew, require) {

    var uploadVideoPageDrew;

    bdd.describe('Video Upload', function () {
        bdd.before(function () {
            uploadVideoPageDrew = new uploadVideoPageDrew(this.remote);
        });

        bdd.it('should upload a video', function () {
            return uploadVideoPageDrew
                .upload()
                .then(function (results) {
                    assert.equal(results, properties.UPLOAD_VIDEO_THANK_YOU_MSG);
                });
        });

    });
});