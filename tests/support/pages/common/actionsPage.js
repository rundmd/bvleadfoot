/**
 * Created by brendon.kelley on 7/20/16.
 */
define([
  'intern/dojo/node!leadfoot/keys',
  '../elementsPage',
  '../propertiesPage',
  'require'
], function(keys, elements, properties,require) {
  return {
    enterTextByXpath: function (session, locator, text) {
      return session
        .findByXpath(locator)
          .click()
          .pressKeys(text);
    },

    enterTextById: function (session, locator, text) {
      return session
        .findById(locator)
          .click()
          .pressKeys(text);
    },

    enterTextByClass: function (session, locator, text) {
      return session
        .findByClassName(locator)
          .click()
          .pressKeys(text);
    },
      
    dropDownMenuXpathOptionInput: function (session, locator, option) {
      return session
        .findByXpath(locator)
          .click()
          .findByXpath(option)
            .click()
            .end()
          .end();
    },

    dropDownMenuXpathSelectInput: function (session, locator, num) {
      return session
        .findByXpath(locator)
          .click()
          .end()
      .then( function () {
        for( i=0; i<num; i++ ) {
          session.pressKeys(keys.ARROW_DOWN);
        }
        return session.pressKeys(keys.RETURN);
      });
    },
      
    clearTextBoxByXpath: function (session, locator, num) {
      return session
        .findByXpath(locator)
          .click()
        .then( function () {
          for(i = 0; i < num; i++){
            session.pressKeys(keys.BACKSPACE);
          }
        });
    },

    getElementTextByXpath: function (session, locator) {
      return session
        .findByXpath(locator)
          .getVisibleText();
    },

    getPropertyByXpath: function (session, locator, property) {
      return session
        .findByXpath(locator)
          .getProperty(property);
    },

    uploadFileById: function (session, locator, file) {
      return session
        .findById(locator)
          .type(require.toUrl('../..' + file));
    },

    uploadFileByXpath: function (session, locator, file) {
      return session
        .findByXpath(locator)
          .type(require.toUrl('../..' + file));
    },

    selectCheckBoxById: function (session, locator) {
      return session
        .findById(locator)
          .click();
    }

  }
 
});
