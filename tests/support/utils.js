define(function (require) {
    return {
        enterText: function(session, text, locator) {
            console.log('in enterText: ' + text);
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
        }
    };
});
