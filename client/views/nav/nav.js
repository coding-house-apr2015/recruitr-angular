'use strict';

angular.module('recruitr')
.controller('NavCtrl', function($rootScope, $scope, $state, $http){
  $scope.logout = function(){
    $http.defaults.headers.common.Authorization = null;
    $rootScope.activeUser = null;
    $state.go('home');
  };
});
