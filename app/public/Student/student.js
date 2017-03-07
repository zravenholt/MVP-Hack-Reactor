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

    $scope.partner = function (clickedStudent, selStudent) {
      var selectStudent = {};
      var clickStudent = {};
      if (clickedStudent === selStudent) {
        return;
      }
      $scope.students.forEach(function (student) {
        if (student.name === selStudent) {
          if (student.pastStudents.indexOf(clickedStudent) === -1) {
            student.pastStudents.push(clickedStudent);
          }
          for (var i = 0; i < student.availableStudents.length; i++) {
            if (student.availableStudents[i] === clickedStudent) {
              student.availableStudents.splice(i , 1);
            }
          }
          $scope.selectedStudent = student;
          selectStudent = student;
        } else if (student.name === clickedStudent) {
          if (student.pastStudents.indexOf(selStudent) === -1) {
            student.pastStudents.push(selStudent);           
          }
          for (var i = 0; i < student.availableStudents.length; i++) {
            if (student.availableStudents[i] === selStudent) {
              student.availableStudents.splice(i, 1);
            }
          }
          clickStudent = student;
        }
      });
    }


  })