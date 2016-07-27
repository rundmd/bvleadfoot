define([
  'intern/chai!assert',
  'intern/dojo/node!leadfoot/keys',
  './pages/elementsPage',
  './pages/propertiesPage',
  './pages/common/actionsPage',
  'require'    
], function(assert, keys, elements, properties, actions, require) {
  return {
    addCookie: function(session, COOKIE) {
      return session
        .then(function () {
          COOKIE.forEach( function(entry) {
            console.log('adding cookie');
            session.setCookie(entry);
          });
        });
      },

    removeCookie: function(session, COOKIE) {
      return session
        .then(function () {
          COOKIE.forEach( function(entry) {
            console.log('removing cookie');
            session.deleteCookie(entry.name);
          });
        });
    },

    addFilter: function(session, filter) {
      console.log('going to add filter');
        var text = filter.text.split('');
          return session
            .then(function () {
              text.forEach( function(entry) {
                session.pressKeys(entry);
              });
              session.pressKeys(keys.RETURN);
            })
    },

    addComboFilter: function(session, filter) {
      var text = filter.text.split('');
      var input;
      return session
        .then(function () {
          input = session.findByXpath(filter.locator);
          input.click();
          if (!filter.locator.match(/display/i)) {
            text.forEach( function(entry) {
              input.pressKeys(entry);
            });
            input.pressKeys(keys.RETURN);
          }
        });
    },

    instagramLogin: function(session) {
      // Store the current window handle
      var winHandleBefore = session.getCurrentWindowHandle();

      // Perform the click operation that opens new window
      session.findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR).click();
      session.switchToWindow().getCurrentWindowHandle();

      return session
        .sleep(2000)
        .findById(elements.INSTA_USERNAME_ID)
          .type(properties.INSTA_USERNAME)
          .end()
        .findById(elements.INSTA_PW_ID)
          .type(properties.INSTA_PW)
          .end()
        .findByCssSelector(elements.INSTA_LOGIN_BTN)
          .click()
          .end();
    },

    fillUploadForm: function(session, theCheck, theTime) {
      console.log('in fillUploadForm');
      var comment;
      var nickname;

      if (theCheck=="photo" || theCheck=="insta") {
        comment=elements.UPLOAD_PHOTO_COMMENT_LOCATOR;
        nickname=elements.UPLOAD_NICKNAME_LOCATOR;
      } else if (theCheck=="video") {
        comment=elements.UPLOAD_VIDEO_COMMENT_LOCATOR;
        nickname=elements.UPLOAD_VIDEO_NICKNAME_LOCATOR;
      } else {
        comment=elements.UPLOAD_VIDEO_COMMENT_LOCATOR;
        nickname=elements.UPLOAD_VIDEO_NICKNAME_LOCATOR;
      }

      return session
        .then( function () {
          return actions.enterTextByXpath(session, comment, theTime);
        })
        .then( function () {
          return actions.enterText(session, nickname, theTime, 'xpath');
        })
        .then( function () {
          return actions.selectCheckBox(session, elements.UPLOAD_TC_ID, 'id');
        })
        .then( function () {
          return actions.clickButton(session, elements.UPLOAD_SUBMIT_BTN_LOCATOR, 'xpath');
        })
        .sleep(2000);

    }

  }
});
