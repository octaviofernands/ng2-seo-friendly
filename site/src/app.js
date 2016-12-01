"use strict"
import 'angular2-universal-polyfills';
import express      from 'express'
import path         from 'path';
import favicon      from 'serve-favicon';
import morgan       from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser   from 'body-parser';
import config       from '../app/config/main';

// Angular 2 Universal
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

const app = express();
const router = express.Router();

app.use(require('express-redis')(
  config.redis.port,
  config.redis.host,
  config.redis.options,
  config.redis.name
));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('../app/routes/index')(router));

app.set('port', 3001);
app.listen(app.get('port'), function () {
    console.log('Site running on port %d in %s mode', app.get('port'), 'dev');
});