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
                var expand=false;
                $scope.focus = function () {
                    expand = !expand;
                    currentContact.setCurrent($scope.contact);
                };
                $scope.haveFocus =function(contact){
                    return currentContact.isCurrent($scope.contact)?'focus-contact':'';
                };
                $scope.opened =function(contact){
                    return expand&&currentContact.isOpened($scope.contact);
                };
            },
            templateUrl: '/views/contact-item.html'
        };
    });
