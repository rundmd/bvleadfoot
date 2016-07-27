define([
  'intern/chai!assert',
  'intern/dojo/node!leadfoot/keys',
  './pages/elementsPage',
  'intern/dojo/node!mongodb',
  'require'    
], function(assert, keys, elements, mongodb, require) {
  return {
    dbConnect: function() {
          var MongoClient = mongodb.MongoClient;
          var mongoUrl = 'mongodb://localhost:27017/qa';
          return MongoClient.connect(mongoUrl);
        },

    getLocaleText: function(db, locales) {
      if (typeof locales === 'undefined' || locales == null) {
        return db.collection('translations').find({}, { _id: 0 } ).toArray() 
          .then( function (docs) {
            db.close();
            return docs;
          });
      } else {
        locales = locales.split(',');
        return db.collection('translations').find({ locale: { $in: locales } }, { _id: 0 } ).toArray()
          .then(function (docs) {
            db.close();
            return docs;
          });
       }
      
      }

    }
});
