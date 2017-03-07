angular.module('app.student', [])
  .controller('StudentController', function ($scope, Tasks) {
    $scope.students = [];

    $scope.init = function () {
      console.log('init fired')
      Tasks.getAll(function (res) {
        console.log(res.data, ' DATA from init in student.js')
        $scope.students = res.data;
      })
    }

    $scope.getAll = Tasks.getAll;


  })