define([
  'intern',
  'intern!bdd',
  'intern/chai!assert',
  'intern/dojo/node!leadfoot/Command',
  '../support/utils',
  '../support/dbUtils',
  '../support/pages/propertiesPage',
  '../support/pages/elementsPage',
  '../support/pages/uploadTranslationTestPage',
  'require'
], function(intern, bdd, assert, Command, utils, dbUtils, properties, elements, uploadTranslationTestPage, require){

  var uploadTranslationTestPage;
  dbUtils.dbConnect().then(function (db) {
    dbUtils.getLocaleText(db, intern.args.locales).then(function (docs) {
      bdd.describe('test submission app translations', function (){
        bdd.before(function(){
            uploadTranslationTestPage = new uploadTranslationTestPage(this.remote);
        });
        docs.forEach(function (localeDoc) {
          var localeInfo = JSON.parse(JSON.stringify(localeDoc));
          bdd.it('verify ' + localeInfo.locale + ' text on submission app landing page', function(){
            return uploadTranslationTestPage
                .verifyLandingPageText(localeInfo);
          });

          bdd.it('verify ' + localeInfo.locale + ' text for photo upload', function(){
            //this.skip();
            return uploadTranslationTestPage
                .verifyUploadPhotoText(localeInfo);
          });
       
          bdd.it('verify ' + localeInfo.locale + ' text for video upload', function(){
            //this.skip();
            return uploadTranslationTestPage
                .verifyUploadVideoText(localeInfo);
          });

        });
      });
    });
  });

});