angular.module('app.student', [])
  .controller('StudentController', function ($scope, Tasks) {
    $scope.students = [{name: 'Cleopatra', 
                        picture: 'NA', 
                        age: 2100, 
                        likes: 'Temples being built in my name', 
                        dislikes: 'De-"nile" from anyone in my presence', 
                        blurb: 'Never code in the desert. Sand is impossible to remove from your keyboard.', 
                        pastStudents: [], 
                        AvailableStudents:[]
                      },
                      {name: 'Jesus', 
                        picture: 'NA', 
                        age: 2017, 
                        likes: 'Judaism', 
                        dislikes: 'People using my belief to justify selfish causes', 
                        blurb: 'I enjoy fishing, prayer, and hanging out with my dad', 
                        pastStudents: [], 
                        AvailableStudents:[]
                      },
                      {name: 'Muhammad', 
                        picture: 'NA', 
                        age: 1400, 
                        likes: 'Being last but not least', 
                        dislikes: 'People using my belief to justify selfish causes', 
                        blurb: 'My name is the most common in the world. I intend to make my coding styles the same.', 
                        pastStudents: [], 
                        AvailableStudents:[]
    }];

    $scope.init = function () {
      console.log('init fired')
      Tasks.getAll(function (res) {
        console.log(res.data, ' DATA')
        $scope.students = res.data;
      })
    }

    $scope.getAll = Tasks.getAll;


  })