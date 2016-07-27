define([
  'intern/chai!assert',
  'intern/dojo/node!leadfoot/keys',
  './pages/elementsPage',
  './pages/propertiesPage',
  'intern/dojo/node!mongodb',
  'require'    
], function(assert, keys, elements, properties, mongodb, require) {
  return {
    dbConnect: function(ENV) {
      var MongoClient = mongodb.MongoClient;
      var mongoUrl;
      
      if (ENV == 'qa') {
        mongoUrl = 'mongodb://' + properties.MONGO_QA_HOST;
      } else {
        mongoUrl = 'mongodb://' + properties.MONGO_LOCAL_HOST;
      } 
        
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
