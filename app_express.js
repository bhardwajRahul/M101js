/**
 * Created by rahul on 10/6/17.
 */
var express = require('express'),
    app = express(),engines = require('consolidate');

app.engine('html',engines.nunjucks);
app.set('view engine','html');
app.set('views', __dirname + '/views');

app.get('/', function(req,res) {
    res.render('hello',{ name: 'Tiger'});
});

app.get('/intro', function(req,res){
    res.send('Hello World');
});

app.use(function(req,res){
    res.sendStatus(404);
});

var server = app.listen(8000, function(){
    var port = server.address().port;
    console.log('Express server is up and running at %s',port);
});