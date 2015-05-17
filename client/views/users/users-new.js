'use strict';

angular.module('recruitr')
.controller('UsersNewCtrl', function($scope, User, $state, $window){
  console.log('in UsersNewCtrl');

  $scope.create = function(obj){
    // var user = new User(obj);
    if($scope.user.password1 === $scope.user.password2){
      obj.password = $scope.user.password1;
      delete obj.password1;
      delete obj.password2;
      User.save(obj)
      .then(function(){
        $state.go('users.list');
      });
    }else{
      $window.swal({title: 'Password Error', text: 'Passwords do not match. Please try again.', type: 'error'});
    }
  };
});
