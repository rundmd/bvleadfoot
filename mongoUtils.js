/**
 * Created by brendon.kelley on 7/27/16.
 */
var MongoClient = require('mongodb').MongoClient;
require("amd-loader");
var assert = require('assert');
var url = 'mongodb://localhost:27017/qa';


var lang= {
  0: {locale: '', }
};



MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  var len = 0;
  var i;

  for (i in lang) {
    //call function like:
    /*updateDoc(i,db,function(){

    })*/
  }

  db.close();
});

// insert new document into mongo
var insertDoc= function(it, db, callback) {
  db.collection('translations').insertOne( {
    "locale": lang[it].locale,
    "submissionUrl": lang[it].SUBMISSION_URL,
    "uploadPhotoText": lang[it].UPLOAD_PHOTO_TEXT,
    "uploadVideoText":  lang[it].UPLOAD_VIDEO_TEXT,
    "takePhotoText": lang[it].TAKE_PHOTO_TEXT,
    "uploadFacebookText": lang[it].UPLOAD_FACEBOOK_TEXT,
    "uploadInstagramText": lang[it].UPLOAD_INSTA_TEXT,
    "commentText": lang[it].COMMENT_TEXT,
    "nicknameText": lang[it].NICKNAME_TEXT,
    "rmText": lang[it].RIGHTS_MANG_TEXT,
    "postBtnText": lang[it].POST_BTN_TEXT,
    "backBtnText": lang[it].BACK_BTN_TEXT
  }, function (err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the translations collection.");
    callback();
  });
};

//this will find the first document based on the locale field, if  you want a different field change it
var updateDoc=function(it, db, callback) {
  db.collection('translations').updateOne(
  { "locale" : lang[it].locale },
  {
    //filed to update ex: $set: {"locale": "de_De", "name": "test"} woud update the locale and add a new field name (if it doesnt exist)
    $set: { },
  }, function(err, results) {
    console.log(results);
    callback();
  });

};

//using objectkeys
//{ "fr_FR":  { "field" : "val1" }, "de_DE" : { "field" : "val2" }, "es_ES": { "field" : "val3" }  }'
// var lang=Object.keys(myobject);
var updateDocs=function(it, db,callback) {
  db.collection('translations').updateOne(
    {"locale": lang[it]},
    {
      $set:{myObject[lang[it]]},
    },function(err, results) {
    console.log(results);
    callback();
  });
};

var updateManyDocs=function(db,callback) {
  for(i in object.keys(myobject)) {
    updateDocs(i,db,function(){
    })
  }
};
