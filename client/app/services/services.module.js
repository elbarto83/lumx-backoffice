define(['angular',
        './campService',
        './usersService',
        './unitsService',
        './scoutYearService',
        './notificationsService'
        ], function (angular, campService,
                     usersService, unitsService, scoutYearService, notificationsService) {
    return angular.module('app.services', [])
        .service('campService', campService)
        .service('usersService', usersService)
        .service('unitsService', unitsService)
        .service('scoutYearService', scoutYearService)
        .service('notificationsService', notificationsService);
});