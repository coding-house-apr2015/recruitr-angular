'use strict';

angular.module('recruitr')
.controller('ProfilesShowCtrl', function($scope, $rootScope, fauxProfiles){
  console.log('in ProfilesShowCtrl');

  $scope.student = fauxProfiles[0];
});
