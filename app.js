/**
 * Created by rahul on 13/6/17.
 */
var express = require('express'),
    app = express(),
    mongoClient = require('mongodb').MongoClient,
    engines = require('consolidate'),
    assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine','html');
app.set('views',__dirname + '/views');

mongoClient.connect('mongodb://localhost:27017/video',function (err,db) {
    assert.equal(null, err);
    console.log('Connected to MongoDB');

    app.get('/', function(req, res) {
        db.collection('movies').find({}).toArray(function (err, data) {
            res.render('movies', {'movies': data});
        });
    });
    app.get('/intro',function(req,res){
        db.collection('name').find({}).toArray(function(err,data){
            res.render('hello',{'names':data});
        });
    });

    app.use(function(req,res){
        app.sendStatus(404);
    });

    var server = app.listen(8000, function() {
        var port = server.address().port;
        console.log('Server is up and running at %s.', port);
    });
});