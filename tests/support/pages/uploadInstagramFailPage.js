define([
  'intern/chai!assert',
  '../utils',
  './common/actionsPage',
  './elementsPage',
  './propertiesPage',
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'require'
], function (assert,utils,actions,elements,properties,pollUntil,require,results) {
  function uploadInstagramFailPage(remote){
    this.remote=remote;
  }

  uploadInstagramFailPage.prototype= {
    constructor: uploadInstagramFailPage,

    uploadPlusComment: function () {
      var session = this.remote;
      var temp = 'photo';
      return session
        .get(properties.SUBMISSION_URL)
        .findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR)
          .click()
          .then( pollUntil('return document.getElementById("choose");', 10000) )
          .end()
        .then( () => {
          return actions.clickButton(session,elements.UPLOAD_INSTA_CONTENT_PHOTO, 'xpath');
        })
        .then( () => {
          return actions.enterText(session,elements.UPLOAD_PHOTO_COMMENT_LOCATOR, 'this is great', 'xpath');
        })
        .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
          .isEnabled();
    },

    uploadPlusNickname: function () {
      var session = this.remote;
      var temp = 'photo';
      return session
        .get(properties.SUBMISSION_URL)
        .findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR)
          .click()
          .then( pollUntil('return document.getElementById("choose");', 10000) )
          .end()
        .then( () => {
          return actions.clickButton(session,elements.UPLOAD_INSTA_CONTENT_PHOTO, 'xpath');
        })
        .then( () => {
          return actions.enterText(session,elements.UPLOAD_NICKNAME_LOCATOR, 'test', 'xpath');
         })
         .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
           .isEnabled();
    },

    uploadBoth: function () {
      var session = this.remote;
      var temp = 'photo';
      return session
        .get(properties.SUBMISSION_URL)
        .findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR)
          .click()
          .then( pollUntil('return document.getElementById("choose");', 10000) )
          .end()
        .then( () => {
          return actions.clickButton(session,elements.UPLOAD_INSTA_CONTENT_PHOTO, 'xpath');
        })
        .then( () => {
          return actions.enterText(session,elements.UPLOAD_PHOTO_COMMENT_LOCATOR, 'this is great', 'xpath');
        })
        .then( () => {
          return actions.enterText(session,elements.UPLOAD_NICKNAME_LOCATOR, 'test','xpath');
        })
        .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
          .isEnabled();

    },

    uploadCommentAgree: function () {
      var session = this.remote;
      var temp = 'photo';
      return session
        .get(properties.SUBMISSION_URL)
        .findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR)
          .click()
          .then( pollUntil('return document.getElementById("choose");', 10000) )
          .end()
        .then( () => {
          return actions.clickButton(session,elements.UPLOAD_INSTA_CONTENT_PHOTO, 'xpath');
        })
        .then( () => {
          return actions.enterText(session,elements.UPLOAD_PHOTO_COMMENT_LOCATOR, 'this is great', 'xpath');
        })
        .then(function(){
          return actions.clickButton(session,elements.UPLOAD_TC_ID, 'id');
        })
        .findByXpath(elements.UPLOAD_SUBMIT_BTN_LOCATOR)
         .isEnabled();
    }
  }; 

  return uploadInstagramFailPage;
});
