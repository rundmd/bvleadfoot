define([
  'intern/dojo/node!leadfoot/keys',
  '../elementsPage',
  '../propertiesPage',
  'require'
], function(keys, elements, properties,require) {
  return {
    uploadFile: function(session, locator, file, type) {
      if ( type == 'id') {
        return this.uploadFileById(session, locator, file);
      } else if ( type == 'xpath') {
        return this.uploadFileByXpath(session, locator, file);
      }
    },

    clickButton: function(session, locator, type) {
      if ( type == 'xpath' ) {
        return this.clickButtonByXpath(session, locator);
      } else if (type == 'id') {
        return this.clickButtonById(session, locator);
      }
    },

    enterText: function(session, locator, text, type) {
      if (type == 'xpath') {
        return this.enterTextByXpath(session, locator, text);
      } else if (type == 'id') {
        return this.enterTextById(session, locator, text);
      } else if (type == 'class') {
        return this.enterTextByClass(session, locator, text);
      }
    },

    clearTextBox: function(session, locator, num, type) {
      if (type == 'xpath') {
        return this.clearTextBoxByXpath(session, locator, num);
      } else if (type == 'id') {
        return this.clearTextBoxById(session, locator, num);
      }
    },

    getText: function(session, locator, type) {
      if (type == 'xpath') {
        return this.getTextByXpath(session, locator);
      } else if (type == 'id') {
        return this.getTextById(session, locator);
      }
    },

    selectCheckBox: function(session, locator, type) {
      if (type == 'xpath') {
        return this.selectCheckBoxByXpath(session, locator);
      } else if (type == 'id') {
        return this.selectCheckBoxById(session, locator);
      }
    },
  
    enterTextByXpath: function (session, locator, text) {
      return session
        .findByXpath(locator)
          .click()
          .pressKeys(text)
          .end();
    },

    enterTextById: function (session, locator, text) {
      return session
        .findById(locator)
          .click()
          .pressKeys(text)
          .end();
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

    enterTextAndEnterByXpath: function (session, locator, text) {
      return session
        .findByXpath(locator)
        .click()
        .sleep(2000)
        .then( function () {
          session.pressKeys(text)
          return session.pressKeys(keys.RETURN)
        })
    },

    enterTextAndEnterById: function (session, locator, text) {
      return session
        .findById(locator)
        .click()
        .sleep(2000)
        .then( function () {
          session.pressKeys(text)
          return session.pressKeys(keys.RETURN)
        })
    },

    enterTextAndEnterByClass: function (session, locator, text) {
      return session
        .findByClassName(locator)
        .click()
        .sleep(2000)
        .then( function () {
          session.pressKeys(text)
          return session.pressKeys(keys.RETURN)
        })
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

    getTextByXpath: function (session, locator) {
      return session
        .findByXpath(locator)
          .getVisibleText();
    },

    getTextById: function (session, locator) {
      return session
        .findById(locator)
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
          .type(require.toUrl('../..' + file))
          .end();
    },

    uploadFileByXpath: function (session, locator, file) {
      return session
        .findByXpath(locator)
          .type(require.toUrl('../..' + file))
          .end();
    },

    clickButtonByXpath: function (session, locator) {
      return session
        .findByXpath(locator)
        .click()
        .end();
    },

    clickButtonById: function (session, locator) {
      return session
        .findById(locator)
        .click()
        .end();
    },

    selectCheckBoxById: function (session, locator) {
      return session
        .findById(locator)
          .click()
          .end();
    },

    selectCheckBoxByXpath: function (session, locator) {
      return session
        .findByXpath(locator)
          .click()
          .end();
    }

  }
 
});
