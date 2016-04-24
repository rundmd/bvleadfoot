define([
    'intern/dojo/node!leadfoot/keys',
    './pages/elementsPage',
    './pages/propertiesPage',
    'require'    
], function(keys, elements, properties, require) {
    return {
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
                })
                //.sleep(2000);
        },

        elementIsVisible: function(element) {
            return (element.isDisplayed()) ? true : null;;
        },

        elementIsVisible2: function(session) {
            console.log("check visibility");
            return (element.offsetParent !== null) ? element : null;
        }, 

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

        openAdvancedSearch: function(session) {
            console.log('trying to open adv search');
            return session
                .get(properties.CONSOLE_URL)
                .setFindTimeout(10000)
                .findByXpath(elements.BETA_TAB_LOCATOR)
                    .click()
                    .end();
                //.setFindTimeout(10000)
                //.findByXpath(elements.MODAL_CLOSE_BTN_LOCATOR)
                //    .click()
                //    .end()
                //.sleep(1000);
            //.then(pollUntil('return document.getElementById("btn-filters");', 10000))
            // TO DO
        }

    }
});
