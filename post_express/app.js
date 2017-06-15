var express = require('express'),
    app =express(),
    engines = require ('consolidate'),
    bodyParser = require ('body-parser');

app.engine('html',engines.nunjucks);
app.set('view engine','html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended : true}));

function errorHandler(err, req, res, next) {
    //console.error(err.message);
   // console.error(err.stack);
    res.status(500).render('error_template',{error: err});
}

app.get('/',function(req, res, next){
    res.render('fruitpicker', { 'fruits' :['apple', 'orange', 'banana', 'peaches']});
});

app.post('/favourite_fruit', function(req, res, next){
    var favourite =req.body.fruit;
    if (typeof favourite == 'undefined') {
        next('Please choose a fruit!');
    }
    else {
        res.send("Your favorite fruit is " + favourite);
    }
});

app.use(errorHandler);

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Express server listening on port %s', port);
});