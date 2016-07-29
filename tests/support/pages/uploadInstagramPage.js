define([
  'intern/chai!assert',
  '../utils',
  './common/actionsPage',
  './propertiesPage',
  './elementsPage',
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'require'
], function (assert,utils,actions,properties,elements,pollUntil,require) {
  function uploadInstagramPage(remote) {
    this.remote = remote;
  }

  uploadInstagramPage.prototype = {
    constructor: uploadInstagramPage,

    upload: function () {
      var session = this.remote;
      return session
        .get(properties.SUBMISSION_URL)
        .setFindTimeout(10000)
        .findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR)
        .click()
        .then(pollUntil('return document.getElementById("choose");', 10000))
        .end()
        .then( () => {
          return actions.clickButton(session,elements.UPLOAD_INSTA_CONTENT_PHOTO,'xpath');
        })
        .then( () => {
          return utils.fillUploadForm(session,"insta",'test');
        })
        .setFindTimeout(10000)
        .then( () => {
          return actions.getText(session, '//*[@id="thanks"]/div[2]/div[2]/div/div/div/p', 'xpath');
        });
    }
  }; 

  return uploadInstagramPage;
});


