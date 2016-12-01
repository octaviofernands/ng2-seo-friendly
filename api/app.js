var express   = require('express');
var mongoose  = require('mongoose');
var config    = require('./app/config/main');
var morgan      = require('morgan');
var bodyParser = require('body-parser')

var router = express.Router();
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(config.db);

app.use('/', require('./app/routes/index')(router));

app.set('port', 3000);
app.listen(app.get('port'), function () {
    console.log('API running on port %d in %s mode', app.get('port'), 'dev');
});