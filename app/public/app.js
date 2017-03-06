var app = angular.module('app', ['app.services', 'app.student', 'ngRoute']);


  app.config(function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'Student/student.html',
      controller: 'StudentController'
    });
  });