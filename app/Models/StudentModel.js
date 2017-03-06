var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: String,
  picture: String,
  age: Number,
  likes: String,
  dislikes: String,
  blurb: String,
  pastStudents: Array,
  AvailableStudents: Array
});

module.exports = mongoose.model('Student', StudentSchema)