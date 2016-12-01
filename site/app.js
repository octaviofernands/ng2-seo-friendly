var express     = require('express');
var config      = require('./app/config/main');
var morgan      = require('morgan');
var bodyParser  = require('body-parser')

var router = express.Router();
var app = express();

app.use(require('express-redis')(
  config.redis.port,
  config.redis.host,
  config.redis.options,
  config.redis.name
));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./app/routes/index')(router));

app.set('port', 3001);
app.listen(app.get('port'), function () {
    console.log('Site running on port %d in %s mode', app.get('port'), 'dev');
});