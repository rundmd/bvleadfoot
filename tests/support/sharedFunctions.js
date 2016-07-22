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

      getTextByXpath: function (session, locator) {
        return session
          .findByXpath(locator)
          .sleep(2000)
          .getVisibleText()
      },


      getPropertyByXpath: function (session,locator,property) {
        return session
          .findByXpath(locator)
          .sleep(2000)
          .getProperty(property)
      }

    }
});
