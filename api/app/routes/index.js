var user = require('../controllers/user');
var config = require('../config/main');

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.json({hello: 'world'});
  });

  router.get('/users/list', function (req, res) {
    user.getList(function (users) {
      res.json(users);
    })
  });

  router.post('/users/create', function (req, res) {
    user.postCreate(req.body, function (response) {
      res.json(response);
    });
  });

  router.get('/users/delete/:id', function (req, res) {
    user.delete(req.params.id, function (response) {
      res.json(response);
    });
  });

  return router;
};