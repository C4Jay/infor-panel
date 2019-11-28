const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Tik = new Schema({
  mail: {
    type: String
  },
  usrname: {
    type: String
  },
  fulname: {
    type: String
  }
},{
    collection: 'tiks2'
});

module.exports = mongoose.model('Tik',Tik);