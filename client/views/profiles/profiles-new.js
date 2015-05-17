'use strict';

angular.module('recruitr')
.controller('ProfilesNewCtrl', function($scope, Profile, $state){
  $scope.create = function(student){
    debugger;
    Profile.save(student)
    .then(function(){
      $state.go('profiles.list');
    });
  };
  console.log('in ProfilesNewCtrl');
});
