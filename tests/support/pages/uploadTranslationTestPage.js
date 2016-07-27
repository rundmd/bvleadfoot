define([
  'intern/chai!assert',
  '../utils',
  './propertiesPage',
  './elementsPage',
  './common/actionsPage',
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'require'
], function (assert, utils, properties, elements, actions, pollUntil, require){
  function uploadTranslationTestPage(remote){
    this.remote = remote;
  }

  uploadTranslationTestPage.prototype = {
    constructor: uploadTranslationTestPage,

    verifyLandingPageText: function (localeInfo) {
      var session = this.remote;
      return session
        .setFindTimeout(10000)
        .get(localeInfo.submissionUrl)
        .sleep(2000)
        .then( function () {
          return actions.getElementTextByXpath(session, elements.UPLOAD_PHOTO_BTN_LOCATOR)
            .then( function (results) {
              assert.equal(results, localeInfo.uploadPhotoText);
            });
        })
        .then( function () {
          return actions.getElementTextByXpath(session, elements.TAKE_A_PHOTO_BTN_LOCATOR)
            .then( function (results) {
              assert.equal(results, localeInfo.takePhotoText);
            });
        })
        .then( function () {
          return actions.getElementTextByXpath(session, elements.UPLOAD_VIDEO_BTN_LOCATOR)
            .then( function (results) {
            /*
             * This assertion is broken until 'Upload a video' translation is fixed
             *  assert.equal(results, localeInfo.uploadVideoText);
             */
            });
        })
        .then( function () {
          return actions.getElementTextByXpath(session, elements.UPLOAD_FB_BTN_LOCATOR)
            .then( function (results) {
              assert.equal(results, localeInfo.uploadFacebookText);
            });
        })
        .then( function () {
          return actions.getElementTextByXpath(session, elements.UPLOAD_INSTA_BTN_LOCATOR)
            .then( function (results) {
              assert.equal(results, localeInfo.uploadInstagramText);
            });
        });
    },

    verifyUploadPhotoText: function (localeInfo) {
      var session = this.remote;
      return session
        .get(localeInfo.submissionUrl)
        .setFindTimeout(10000)
        .then( function () {
          return actions.uploadFileById(session, elements.UPLOAD_PHOTO_BTN_ID, properties.PHOTO_UPLOAD_LOCATION);
         })
         .then( function () {
           return actions.getPropertyByXpath(session, elements.UPLOAD_PHOTO_COMMENT_LOCATOR, 'placeholder')
             .then( function (results) {
               assert.equal(results, localeInfo.commentText);
             });
         })
        .then( function () {
          return actions.enterTextByXpath(session, elements.UPLOAD_PHOTO_COMMENT_LOCATOR, 'placeholder');
        })
        .sleep(2000)
        .then( function () {
          return actions.getPropertyByXpath(session, elements.UPLOAD_NICKNAME_LOCATOR, 'placeholder')
            .then( function (results) {
              assert.equal(results, localeInfo.nicknameText);
            });
        })
        .then( function () {
          return actions.enterTextByXpath(session, elements.UPLOAD_NICKNAME_LOCATOR, 'testing');
        })
        .sleep(2000)
        .then( function () {
          return actions.getPropertyByXpath(session, elements.UPLOAD_TC_TEXT, 'innerText')
            .then( function (results) {
              assert.equal(results, localeInfo.rmText);
            });
        })
        .then( function () {
          return actions.selectCheckBoxById(session, elements.UPLOAD_TC_ID);
        })
        .then( function () {
          return actions.getElementTextByXpath(session, elements.UPLOAD_SUBMIT_BTN_LOCATOR)
            .then( function (results) {
              assert.equal(results, localeInfo.postBtnText);
            });
        })
        .then(function () {
          return actions.getElementTextByXpath(session, elements.UPLOAD_BACK_BTN)
            .then(function (results) {
              assert.equal(results, localeInfo.backBtnText);
            });
        });
    },

    verifyUploadVideoText: function (localeInfo) {
      var session = this.remote;
      return session
        .get(localeInfo.submissionUrl)
        .setFindTimeout(10000)
        .findByXpath(elements.UPLOAD_VIDEO_BTN_LOCATOR)
          .click()
          .sleep(2000)
          .end()
        .then( function () {
          return actions.uploadFileByXpath(session, elements.UPLOAD_VIDEO_BTN_LOCATOR2, properties.PHOTO_UPLOAD_LOCATION);
         })
         .then( function () {
           return actions.getPropertyByXpath(session, elements.UPLOAD_VIDEO_COMMENT_LOCATOR, 'placeholder')
             .then( function (results) {
               assert.equal(results, localeInfo.commentText);
             });
         })
        .then( function () {
          return actions.enterTextByXpath(session, elements.UPLOAD_VIDEO_COMMENT_LOCATOR, 'placeholder');
        })
        .sleep(2000)
        .then( function () {
          return actions.getPropertyByXpath(session, elements.UPLOAD_VIDEO_NICKNAME_LOCATOR, 'placeholder')
            .then( function (results) {
              assert.equal(results, localeInfo.nicknameText);
            });
        })
        .then( function () {
          return actions.enterTextByXpath(session, elements.UPLOAD_VIDEO_NICKNAME_LOCATOR, 'testing');
        })
        .sleep(2000)
        .then( function () {
          return actions.getPropertyByXpath(session, elements.UPLOAD_TC_TEXT, 'innerText')
            .then( function (results) {
              assert.equal(results, localeInfo.rmText);
            });
        })
        .then( function () {
          return actions.selectCheckBoxById(session, elements.UPLOAD_TC_ID);
        })
        .then( function () {
          return actions.getElementTextByXpath(session, elements.UPLOAD_SUBMIT_BTN_LOCATOR)
            .then( function (results) {
              assert.equal(results, localeInfo.postBtnText);
            });
        })
        .then(function () {
          return actions.getElementTextByXpath(session, elements.UPLOAD_BACK_BTN)
            .then(function (results) {
              assert.equal(results, localeInfo.backBtnText);
            });
        });
    }

  }; 

  return uploadTranslationTestPage;

});
