var app = angular.module('app', ['app.services', 'app.student', 'app.makeStudent', 'ngRoute']);


  app.config(function ($routeProvider) {
    $routeProvider.when('/students', {
      templateUrl: 'Student/student.html',
      controller: 'StudentController'
    }).when('/makeStudent', {
      templateUrl: 'makeStudent/makeStudent.html',
      controller: 'MakeStudentController'
    })
  });