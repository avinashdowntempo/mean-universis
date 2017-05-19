var port = 8080 || process.env.PORT;
var mainRouter = require('./routes/index');
//var apiRouter = require('./routes/api');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',mainRouter);
//app.use('/api',apiRouter);

mongoose.connect('mongodb://admin:test@ds141401.mlab.com:41401/testing', function(err) {
    if (err) throw err;
	else
	console.log("connected");
});
app.set('views',__dirname+'/client/views');
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'client')));

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})