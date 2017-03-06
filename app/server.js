var express = require('express');
var mongoose = require('mongoose');
var port = process.env.PORT || 1337;
var student = require('./Models/StudentModel.js');

var app = express();

mongoose.connect('mongodb://localhost/students')

// var newStudent = new student({name: 'Mohammad', 
//                               picture: 'NA', 
//                               age: 1400, 
//                               likes: 'Being last but not least', 
//                               dislikes: 'People using my belief to justify selfish causes', 
//                               blurb: 'Never code in the desert. Sand is impossible to remove from your keyboard.', 
//                               pastStudents: [], 
//                               AvailableStudents:[]
//                             });

// newStudent.save();


app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
  console.log('App listening at port: ', port)
});