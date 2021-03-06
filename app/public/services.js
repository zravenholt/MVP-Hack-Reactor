angular.module('app.services', [])
  .service('Tasks', function ($http) {
    this.getAll = function(cb) {
      //get data then run cb on it
      return $http({
        method: 'GET',
        url: '/api/students'
      }).then(function(response) {
          console.log('successful get from db in app.services: ', response)
          cb(response)
          return response;
      });
    }

    this.addStudent = function (student) {
      //takes student obj? and adds them to database,
      //may have to add them to each array
      return $http({
        method: 'POST',
        url: '/api/students',
        data: student
      }).then(function(err, response){
        if (err) {
          console.log('error posting in services.js: ', err)
        } else {
          console.log('successful post!')
        }
      })
    }

    this.updateStudent = function (obj) {
      console.log('update student')
      return $http({
        method: 'PUT',
        url: '/api/students',
        data: obj
      }).then(function (res) {
        console.log('sending update request')
      })
    }

  });