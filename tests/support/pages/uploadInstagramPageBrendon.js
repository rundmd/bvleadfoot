/**
 * Created by brendon.kelley on 5/19/16.
 */

define([
    'intern/chai!assert',
    '../utils',
    './propertiesPage',
    './elementsPage',
    'intern/dojo/node!leadfoot/helpers/pollUntil',
    'require'
], function (assert,utils,properties,elements,pollUntil,require){
        function uploadInstagramPageBrendon(remote){
            this.remote=remote;
        }
    
    uploadInstagramPageBrendon.prototype={
        constructor: uploadInstagramPageBrendon,
        
        upload: function(){
            
            var session=this.remote;

            return session
                .get(properties.SUBMISSION_URL)
                .findByXpath(elements.UPLOAD_INSTA_BTN_LOCATOR)
                    .click()
                    .then(pollUntil('return document.getElementById("choose");', 10000))
                    .end()
                .findByXpath(elements.UPLOAD_INSTA_CONTENT_PHOTO)
                    .click()
                    .sleep(2000)
                    .end()
                .then(function (){
                    return utils.fillUploadFormTest(session,"insta");
                })
                .setFindTimeout(10000)
                .findByXpath('//*[@id="thanks"]/div[2]/div[2]/div/div/div/p')
                .getVisibleText()

        }
    }; return uploadInstagramPageBrendon;
});
