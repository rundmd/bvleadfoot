/**
 * Created by brendon.kelley on 7/20/16.
 */
define([
    'intern/dojo/node!leadfoot/keys',
    './pages/elementsPage',
    './pages/propertiesPage',
    'require'
], function(keys, elements, properties,require) {
    return {

      uploadAFile: function(session, locator, file, type) {
        if( type=='id') {
          return this.uploadAFileById(session, locator, file);
        }
        else if( type=='xpath') {
          return this.uploadAFileByXpath(session, locator, file);
        }
      },

      clickAButtonBy: function(session, locator, type) {
        if( type=='xpath' ) {
          return this.clickAButtonByXapth(session, locator);
        }
        else if(type=='id') {
          return this.clickAButtonById(session, locator);
        }
      },

      enterText: function(session, locator, text, type) {
        if(type=='xpath') {
          return this.enterTextByXpath(session, locator, text);
        }
        else if(type=='id') {
          return this.enterTextById(session, locator, text);
        }
        else if(type=='class') {
          return this.enterTextByClass(session, locator, text);
        }
      },

      clearTextBox: function(session, locator, num, type) {
        if(type=='xpath') {
          return this.clearTextBoxByXpath(session, locator, num);
        }
        else if(type=='id') {
          return this.clearTextBoxById(session, locator, num);
        }
      },

      getText: function(session, locator, type) {
        if(type=='xpath') {
          return this.getTextByXpath(session, locator);
        }
        else if(type=='id') {
          return this.getTextById(session, locator);
        }
      },


      enterTextByXpath: function (session, locator, text) {
          return session
            .findByXpath(locator)
              .click()
              .sleep(2000)
            .then( function () {
              session.pressKeys(text)
              return session.pressKeys(keys.RETURN)
            })
        },

        enterTextById: function (session, locator, text) {
          return session
            .findById(locator)
              .click()
              .sleep(2000)
            .then( function () {
              session.pressKeys(text)
              return session.pressKeys(keys.RETURN)
            })
        },

      enterTextByClass: function (session, locator, text) {
        return session
            .findByClassName(locator)
              .click()
              .sleep(2000)
          .then( function () {
            session.pressKeys(text)
            return session.pressKeys(keys.RETURN)
          })
      },

      dropDownMenuXpathOptionInput: function (session, locator, option) {
        return session
          .findByXpath(locator)
            .click()
            .findByXpath(option)
              .click()
              .end()
            .end()
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
          return session.pressKeys(keys.RETURN)
        })
      },
      
      clearTextBoxByXpath: function (session, locator, num) {
        return session
          .findByXpath(locator)
            .click()
        .then( function () {
          for(i = 0; i < num; i++){
            session.pressKeys(keys.BACKSPACE);
          }
        })
      },

      clearTextBoxById: function (session, locator, num) {
        return session
        .findById(locator)
        .click()
        .then( function () {
          for(i = 0; i < num; i++){
            session.pressKeys(keys.BACKSPACE);
          }
        })
      },

      getTextByXpath: function (session, locator) {
        return session
          .findByXpath(locator)
          .sleep(2000)
          .getVisibleText()
      },

      getTextById: function (session, locator) {
        return session
          .findById(locator)
          .sleep(2000)
          .getVisibleText()
      },

      getPropertyByXpath: function (session, locator, property) {
        return session
          .findByXpath(locator)
          .sleep(2000)
          .getProperty(property)
      },

      clickAButtonByXapth: function(session, locator) {
        return session
          .findByXpath(locator)
            .click()
            .sleep(1000)
            .end()
      },

      clickAButtonById: function(session, locator) {
        return session
          .findByClassName(locator)
            .click()
            .sleep(1000)
            .end()
      },

      uploadAFileById: function(session, id, file) {
        return session
          .findById(id)
          .sleep(2000)
          .type(require.toUrl(file))
          .sleep(2000)
          .end()
      },

      uploadAFileByXpath: function(session, locator, file) {
        return session
          .findByXpath(locator)
          .sleep(2000)
          .type(require.toUrl(file))
          .sleep(2000)
          .end()
      }


    }
});
