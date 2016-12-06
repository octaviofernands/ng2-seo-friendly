var api = require('../controllers/data');

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    api('/users/list', req, res, function (data) {
      res.send(data);
    })
    //req.xhr;
  });

  return router;
};