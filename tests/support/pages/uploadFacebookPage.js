define([
  'intern/chai!assert',
  '../utils',
  './common/actionsPage',
  './propertiesPage',
  './elementsPage',
  'intern/dojo/node!leadfoot/helpers/pollUntil',
  'require'
], function (assert,utils,actions,properties,elements,pollUntil,require) {
  function uploadFacebookPage(remote) {
    this.remote = remote;
  }

  uploadFacebookPage.prototype = {
    constructor: uploadFacebookPage,

    upload: function () {
      var session = this.remote;
      return session
        .get(properties.SUBMISSION_URL)
        .findByXpath(elements.UPLOAD_FB_BTN_LOCATOR)
        .click()
        .then( pollUntil('return document.getElementById("choose");', 10000) )
        .end()
        .then( () => {
          return actions.clickButton(session,elements.UPLOAD_FB_CONTENT_PHOTO,'xpath');
        })
        .then( () => {
          return utils.fillUploadForm(session,"fb",'test');
        })
        .then( () => {
          return actions.getText(session,'//*[@id="thanks"]/div[2]/div[2]/div/div/div/p','xpath');
        });
    }  
  }; 

  return uploadFacebookPage;
});
