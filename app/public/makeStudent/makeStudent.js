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

      Tasks.getAll((res) => console.log('response: ', res))
        .then(function (res) {
          res.data.forEach(function (oldStudent) {
            studentObj.availableStudents.push(oldStudent.name);
            oldStudent.availableStudents.push(studentObj.name);
          })
          console.log('CONSOLE LOGGING available students: ', studentObj.availableStudents);
          return {oldStudents: res.data, student: studentObj}       
        }).then(function (studentsObj) {
          Tasks.addStudent(studentsObj.student);  
          return studentsObj.oldStudents;
        }).then(function (oldStudents) {
          console.log('OLD STUDENTS', oldStudents)
          oldStudents.forEach(function (student) {
            console.log(student)
            Tasks.updateStudent(student);
          })
        });

    };
  })