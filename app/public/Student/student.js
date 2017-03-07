angular.module('app.student', [])
  .controller('StudentController', function ($scope, Tasks) {
    $scope.students = [];
    $scope.selectedStudent = {};
    $scope.searchShow = false;

    $scope.init = function () {
      console.log('init fired')
      Tasks.getAll(function (res) {
        console.log(res.data, ' DATA from init in student.js')
        $scope.students = res.data;
      })
    }

    $scope.searchStudents = function (name) {
      if (name.length === 0) {
        $scope.searchShow = false;
        return;
      }
      $scope.students.forEach(function (student) {
        console.log(student.name)
        if (student.name === name) {
          console.log('found student')
          $scope.selectedStudent = student;
        }
      });
      if ($scope.selectedStudent.name !== name) {
        console.log('student not found');
      }
      $scope.searchShow = true;
    }

    $scope.getAll = Tasks.getAll;


  })