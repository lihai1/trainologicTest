'use strict';

/**
 * @ngdoc overview
 * @name trainologicTestApp
 * @description
 * # trainologicTestApp
 *
 * Main module of the application.
 */
angular
  .module('trainologicTestApp', [
    'ngRoute',
      'trainologicTestApp.contacts'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
  });
