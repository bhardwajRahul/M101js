/**
 * Created by rahul on 11/6/17.
 */
var mongodb = require('mongodb').MongoClient,
    assert = require('assert');
var url = 'mongodb://localhost:27017/video';
mongodb.connect(url, function(err, db){

    assert.equal(null, err);
    console.log("connected to db");

    db.collection('movies').find({}).toArray(function(err, docs){

        docs.forEach(function(doc){
            console.log(doc.title);
        });
        db.close();

    });

    console.log('called find()');

});
