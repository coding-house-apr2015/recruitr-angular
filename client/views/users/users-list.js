'use strict';

angular.module('recruitr')
.controller('UsersListCtrl', function($scope, User, fauxUsers){
  $scope.users = fauxUsers;
  $scope.page = 1;
  $scope.moveBack = false;
  $scope.moveForward = false;
  $scope.changePage = function(change){
    if(change === 'next' && $scope.users.length === 10){
      $scope.page += 1;
      $scope.moveBack = true;
    } else if(change === 'prev' && $scope.page !== 1){
      $scope.page -= 1;
      $scope.moveForward = true;
    }
    // User.find($scope.page)
    // .then(function(response){
    //   $scope.users = response.data.users;
    // });
    if($scope.page === 1){
      $scope.moveBack = false;
    } else if($scope.users.length < 10){
      $scope.moveForward = false;
    }
  };
  // User.find()
  // .then(function(response){
  //   $scope.users = response.data.users;
  //   if($scope.users === 10){
  //     $scope.moveForward = true;
  //   }
  // });
  $scope.editUser = function(user){
    User.editUser(user)
    .then(function(response){
      $scope.users = response.data.users;
    });
  };
  $scope.deleteUser = function(user){
    User.deleteUser(user)
    .then(function(response){
      $scope.users = response.data.users;
    });
  };
});
