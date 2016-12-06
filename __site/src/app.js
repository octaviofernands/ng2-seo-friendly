"use strict";
//"use strict"
require('angular2-universal-polyfills');
//import 'ts-helpers';
require('./__workaround.node');
var express_1 = require('express');
var morgan_1 = require('morgan');
var body_parser_1 = require('body-parser');
var main_1 = require('../app/config/main');
// Angular 2 Universal
/*
import {
  provide,
  enableProdMode,
  expressEngine,
  REQUEST_URL,
  ORIGIN_URL,
  BASE_URL,
  NODE_ROUTER_PROVIDERS,
  NODE_HTTP_PROVIDERS,
  ExpressEngineConfig
} from 'angular2-universal';
*/
var app = express_1.default();
var router = express_1.default.Router();
app.use(require('express-redis')(main_1.default.redis.port, main_1.default.redis.host, main_1.default.redis.options, main_1.default.redis.name));
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('/', require('../app/routes/index')(router));
app.set('port', 3001);
app.listen(app.get('port'), function () {
    console.log('Site running on port %d in %s mode', app.get('port'), 'dev');
});
//# sourceMappingURL=app.js.map