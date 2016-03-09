define(function (require) {
    return {
        enterText: function(session, text, locator) {
            var text = text.split('');
            var input;
            return session
                .then(function () {
                    input = session.findByXpath(locator);
                    input.click();
                    for(var i = 0; i < text.length; i++) {
                        input.pressKeys(text[i]);
                    }
                    input.pressKeys('\uE006');
                });
        },

        elementIsVisible: function(element) {
            //return (element.isDisplayed()) ? true : null;;
            return element.isDisplayed();
            
        },

        elementIsVisible2: function(element) {
            return (element.offsetParent !== null) ? element : null;
        }

    };
});
