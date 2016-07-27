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
], function (assert, utils, elements, properties, consoleElements, pollUntil, keys, require) {
  function checkConsolePage(remote) {
    this.remote = remote;
  }
 
  checkConsolePage.prototype = {
    constructor: checkConsolePage,

    checkUpload: function (timestamp) {
      var session = this.remote;
      return session
        .get(consoleElements.SUBMISSION_URL)
        .setFindTimeout(10000)
        .findByXpath(consoleElements.USERNAME_LOCATOR)
          .click()
          .type(properties.USERNAME)
          .end()
        .findByXpath(consoleElements.PASSWORD_LOCATOR)
          .click()
          .type(properties.PASSWORD)
          .end()
        .findByXpath(consoleElements.SUBMIT_BTN_LOCATOR)
          .click()
          //.sleep(2000)
          .end()
        .then(pollUntil('return document.getElementById("js-new-update-bar");', 5000))
        .getPageSource()
        .then( function (results) {
          assert.include(results, timestamp);
        });

    }        

  }; 

    return checkConsolePage;
});
