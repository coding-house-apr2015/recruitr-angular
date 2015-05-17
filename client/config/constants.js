'use strict';

angular.module('recruitr')
.constant('nodeUrl', 'http://localhost:8000')
.constant('fauxUsers',
[
  {
    _id: 'b00000000000000000000001',
    name: 'Dick Armstrong-Stoner',
    company: 'Coding House',
    email: 'rljarm@gmail.com',
    firebaseId: 'twitter:3',
    createdAt: 1431541042952,
    role: 'viewer'
  },
  {
    _id: 'b00000000000000000000002',
    name: 'Jon Edwards',
    company: 'Coding House',
    email: 'jkedwards@me.com',
    firebaseId: 'facebook:5',
    createdAt: 1431541109988,
    role: 'viewer'
  },
  {
    _id: 'b00000000000000000000003',
    name: 'Cris Oyler',
    company: 'Coding House',
    email: 'co@gmail.com',
    firebaseId: 'facebook:6',
    createdAt: 1431541109988,
    role: 'superviewer'
  },
  {
    _id: 'b00000000000000000000004',
    name: 'Clyde Marl',
    company: 'Coding House',
    email: 'cm@gmail.com',
    firebaseId: 'facebook:7',
    createdAt: 1431541109988,
    role: 'admin'
  }
]
)

.constant('fauxProfiles',
[
  {
    _id: 'a00000000000000000000001',
    firstName: 'Andrew',
    lastName: 'Dinh',
    photo: 'https://avatars0.githubusercontent.com/u/11606611?v=3&s=460',
    createdAt: 1431541042952,
    skills: ['Joi', 'Hapi', 'Node'],
    exposure: ['Selenium', 'QA', 'Java', 'Python'],
    bio: 'Developer A',
    location: 'San Jose, CA',
    interests: ['Soccer', 'Football', 'Tennis'],
    remote: true,
    relocate: false,
    locationPref: ['San Francisco', 'Fremont', 'San Jose'],
    education: ['edA', 'edB', 'edC'],
    contact: {
      email: 'test1@test.com',
      phone: '510-345-6789',
      address: '125 Main St, Fremont, CA 94555'
    },
    social: {
      github: 'https://github.com/andrewtdinh',
      facebook: 'BookFace3',
      twitter: 'https://twitter.com/andrewtdinh',
      linkedIn: 'https://www.linkedin.com/in/andrewtdinh',
      stackoverflow: 'http://stackoverflow.com/users/4750158/andrewtdinh'
    }
  },
  {
    _id: 'a00000000000000000000002',
    firstName: 'Jon',
    lastName: 'Edwards',
    photo: 'http://pickaface.net/avatar/kolohelios533660af577c3.png',
    createdAt: 1431541042952,
    skills: ['Joi', 'Hapi', 'Node'],
    exposure: ['Selenium', 'QA', 'Java', 'Python'],
    bio: 'Developer A',
    location: 'San Jose, CA',
    interests: ['Soccer', 'Football', 'Tennis'],
    remote: true,
    relocate: false,
    locationPref: ['San Francisco', 'Fremont', 'San Jose'],
    education: ['edA', 'edB', 'edC'],
    contact: {
      email: 'test1@test.com',
      phone: '510-345-6789',
      address: '125 Main St, Fremont, CA 94555'
    },
    social: {
      github: 'https://github.com/andrewtdinh',
      facebook: 'BookFace3',
      twitter: 'https://twitter.com/andrewtdinh',
      linkedIn: 'https://www.linkedin.com/in/andrewtdinh',
      stackoverflow: 'http://stackoverflow.com/users/4750158/andrewtdinh'
    }
  }
]);
