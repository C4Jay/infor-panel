const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
    usrname: {
      type: String
    },
    fulname: {
      type: String
    },
    mail: {
      type: String
    },
    country: {
      type: String
    },
    password: {
      type: String
    }
  },{
      collection: 'users'
  });

module.exports = mongoose.model('User',User);