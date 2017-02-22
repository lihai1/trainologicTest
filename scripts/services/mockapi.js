'use strict';

/**
 * @ngdoc service
 * @name trainologicTestApp.mockApi
 * @description
 * # mockApi
 * Service in the trainologicTestApp.
 */
angular.module('trainologicTestApp.mockApi',[])
    .service('mockApi', function ($q) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var contacts = [
            {
                id: 1,
                name: "Friends",
                type: "Group",
                contacts: [
                    {id: 2, name: "Udi", type: "Contact"},
                    {id: 3, name: "Tommy", type: "Contact"},
                    {
                        id: 6,
                        name: "Old Friends",
                        type: "Group",
                        contacts: [
                            {id: 7, name: "Itay", type: "Contact"},
                        ]
                    },
                ]
            },
            {
                id: 4,
                name: "Family",
                type: "Group",
                contacts: [
                    {id: 5, name: "Roni", type: "Contact"},
                ]
            },
            {id: 8, name: "Ori", type: "Contact"},
        ];
        this.getContacts = function () {
            var def = $q.defer();
            def.resolve(contacts);
            return def.promise;
        };
        
    });
