var express = require('express');
var json = require('express-json');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 1337;
var student = require('./Models/StudentModel.js');

var app = express();

mongoose.connect('mongodb://localhost/students')

// var newStudent = new student({name: 'Neil Armstrong', 
//                               picture: 'NA', 
//                               age: 80, 
//                               likes: 'small steps for man, giant leaps for mankind', 
//                               dislikes: 'exorbinant gravity', 
//                               blurb: 'Space is great until you realize theres no one to share it with.', 
//                               pastStudents: [], 
//                               AvailableStudents:[]
//                             });

// newStudent.save();


app.use(express.static(__dirname + '/public'));

app.get('/api/students', function (request, response) {
  student.find({}, function (err, res) {
    if (err) {
      console.log('error occurred finding db: ', err);
    } else {
      response.send(res)
    }
  })
})

app.listen(port, function () {
  console.log('App listening at port: ', port)
});