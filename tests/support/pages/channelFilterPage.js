define(['../utils', './pageElements', 'require'], function (utils, pageElements, require) {
    function channelFilterPage(remote) {
        this.remote = remote;
    }

    channelFilterPage.prototype = {
        constructor: channelFilterPage,

        addFilter: function () {
            var session = this.remote;
            return session
                .get('http://localhost:8085')
                .setFindTimeout(5000)
                .findById('btn-filters')
                    .click()
                    .end()
                .then(function () {
                    return utils.enterText(session, 'instagram', pageElements.CHANNEL_FILTER_LOCATOR);
                })
                .findByXpath('//strong[@data-reactid=".0.1.1.0.0.0"]')
                .getVisibleText()
                .then(function (text) {
                    return text;;
                });
        }
    };

    return channelFilterPage;
});

