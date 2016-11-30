var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  desc: String
});

module.exports = mongoose.model('users', userSchema);