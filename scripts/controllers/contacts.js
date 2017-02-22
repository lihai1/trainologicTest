'use strict';

/**
 * @ngdoc function
 * @name trainologicTestApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the trainologicTestApp
 */
angular.module('trainologicTestApp.contacts',['trainologicTestApp.contact','trainologicTestApp.mockApi'])
  .controller('ContactsCtrl', function ($scope,mockApi) {
      $scope.contacts=[{name:'dsg'}];
      mockApi.getContacts().then(function(data){
          $scope.contacts = data;
      });
  });
