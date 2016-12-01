var config    = require('../config/main');
var request = require('request');

var getData = function (url, req, res, cb) {
  req.redis.get(url, function (err, data) {
    if(err || !data) {
      console.log('via request');
      request(config.api + url, function (err, response, body) {
        if (!err && response.statusCode == 200) {
          var json = JSON.parse(body);
          req.redis.set(url, body);
          cb(json);
        }
      });
    } else {
      console.log('via redis');
      var json = JSON.parse(data);
      cb(json);
    }
  });
}

module.exports = getData;