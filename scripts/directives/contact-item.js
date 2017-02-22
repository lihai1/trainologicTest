'use strict';

/**
 * @ngdoc directive
 * @name trainologicTestApp.directive:contact
 * @description
 * # contact
 */
angular.module('trainologicTestApp.contact', ['trainologicTestApp.current-contact'])
    .directive('contactItem', function () {
        return {
            restrict: 'E',
            scope: {contact: '='},
            controller: function ($scope,currentContact) {
                $scope.focus = function () {
                    currentContact.setCurrent($scope.contact);
                };
                $scope.haveFocus =function(contact){
                    return currentContact.isCurrent($scope.contact)?'focus-contact':'';
                };
                $scope.opened =function(contact){
                    return currentContact.isOpened($scope.contact);
                };
            },
            templateUrl: '/views/contact-item.html'
        };
    });
