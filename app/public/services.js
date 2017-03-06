angular.module('app.services', [])
  .service('Tasks', function ($http) {
    this.getAll = function(cb) {
      //get data then run cb on it
      return $http({}).then(function(err, response) {
        if (err) {
          console.log('error in app.services retrieving data: ', err)
        } else {
          console.log('successful get from db in app.services: ', response)
          cb(response)
          return response;
        }
      })
    }

    this.addStudent = function (student) {
      //takes student obj? and adds them to database,
      //may have to add them to each array
    }

  });