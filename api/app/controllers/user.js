var User = require('../models/User');

exports.postCreate = function (form, cb) {
  var userObj = {
    name: form.name,
    email: form.email,
    desc: form.desc
  }

  var user = new User(userObj);
  user.save(function (err) {
    if(err) {
      returnData = {
        ok: false,
        msg: 'Error ocurred while saving user.' + ' - ' + err
      }
    } else {
      userObj = {
        name: userObj.name,
        email: userObj.email,
        desc: userObj.desc
      }

      returnData = {
        ok:true,
        data: userObj
      }
    }

    cb(returnData);
  });
}

exports.getList = function (cb) {
  User.find(function (err, users) {
    if (err) { console.log(err); }
    cb(users);
  });
};

exports.delete = function (userId, cb) {
  User.findByIdAndRemove(userId, function (err, user) {
    if (err) { console.log(err); }
    var response = {
      ok: true
    }
    cb(response);
  });
}