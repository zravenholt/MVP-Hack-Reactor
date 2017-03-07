angular.module('app.makeStudent', [])
  .controller('MakeStudentController', function ($scope, Tasks) {
    $scope.makeStudent = function (name, picture, age, likes, dislikes, blurb){
      var studentObj = {
        name: name,
        picture: picture,
        age: age,
        likes: likes,
        dislikes: dislikes,
        blurb: blurb,
        pastStudents: [],
        availableStudents: []
      }

      Tasks.addStudent(studentObj);

    };
  })