'use strict';

angular.module('recruitr')
.factory('Profile', function($rootScope, $http, nodeUrl){
  function Profile(){
  }
  Profile.find = function(){
    return $http.get(nodeUrl + '/profiles');
  };
  Profile.save = function(student){
    return $http.post(nodeUrl + '/profiles', student);
  };

  return Profile;
});
