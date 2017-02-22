'use strict';

/**
 * @ngdoc service
 * @name trainologicTestApp.mockApi
 * @description
 * # mockApi
 * Service in the trainologicTestApp.
 */
angular.module('trainologicTestApp.current-contact',[])
    .service('currentContact', function ($q) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var current=false;
        var self=this;
        this.setCurrent=function(contact) {
            current = contact;
        }
        this.isCurrent =function(contact){
            return current == contact;
        };
        this.isOpened = function(contact){
            if(contact == current) return true;
            if(contact.contacts !==undefined) {
                var contacts=contact.contacts;
                for (var k in contacts) {
                    if (typeof contacts[k] == 'object')
                        if (self.isOpened(contacts[k]))
                            return true;
                    if (contact[k] == current) return true;
                }
            }
            return false;
                    
        };
    });
