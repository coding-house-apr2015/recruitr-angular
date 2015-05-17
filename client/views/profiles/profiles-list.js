'use strict';

angular.module('recruitr')
.controller('ProfilesListCtrl', function($scope, $rootScope, Profile, fauxProfiles){
  $scope.students = fauxProfiles;

//   $rootScope.students = [
//   {
//   firstName: 'Dick',
//   lastName: 'Armstrong-Stoner',
//   skills: {
//     skill1: 'Angular',
//     skill2: 'Node',
//     skill3: 'Hapi',
//     skill4: 'Chai',
//     skill5: 'Joi'
//   },
//   exposure: {
//     exposure1: 'jQuery',
//     exposure2: 'Javascript',
//     exposure3: 'react',
//     exposure4: 'coffeeScript',
//     exposure5: 'bootstrap',
//     exposure6: 'jQuery-UI',
//     exposure7: 'Mongoose',
//     exposure8: 'Quantum Random Numbers',
//     exposure9: 'Google Maps API'
//   },
//   interests: {
//     interest1: 'IOT',
//     interest2: 'Machine Learning',
//     interest4: 'Travel',
//     interest5: 'Languages'
//   },
//   blurb: 'Bacon ipsum dolor amet shoulder bacon andouille meatball picanha, pork loin turkey fatback leberkas short ribs venison shankle ribeye landjaeger cow. Pig filet mignon capicola rump pork loin short loin. Tri-tip turkey shank pig picanha. Chuck strip steak fatback bacon alcatra cupim. Pork pancetta beef porchetta shoulder tail t-bone. Corned beef meatball short ribs pig ground round short loin.',
//   location: 'Seattle',
//   preferedLocation: {
//     location1: 'Seattle',
//     location2: 'San Fransisco',
//     location3: 'New York'
//   },
//   relocation: true,
//   remoteWorking: false,
//   education: 'Coding House, Naval Nuclear Power Training, Yoga Instructor',
//   website: 'http://dickarmstrongstoner.com',
//   linkedin: 'http://linkedin.com',
//   stackoverflow: 'http://stackoverflow.com',
//   github: 'http://github.com'
//   }
// ];
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
  Profile.find($scope.page)
  .then(function(response){
    $scope.users = response.data.users;
  });
  if($scope.page === 1){
    $scope.moveBack = false;
  } else if($scope.users.length < 10){
    $scope.moveForward = false;
  }
};
  Profile.find()
  .then(function(response){
    $scope.students = response.data.students;
    if($scope.students === 10){
      $scope.moveForward = true;
    }
  });
  $scope.editStudent = function(student){
    Profile.editStudent(student)
    .then(function(response){
      $scope.students = response.data.students;
    });
  };
  $scope.deleteStudent = function(student){
    Profile.deleteStudent(student)
    .then(function(response){
      $scope.students = response.data.students;
    });
  };
});
