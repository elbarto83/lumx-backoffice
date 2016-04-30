define(['angular',
        './config.route',
        './users',
        './currentuser',
        './controllers/userHeaderController',
        './services/updateProfileService'
], function (angular, config, UsersController, CurrentUserController,
             userHeaderController, updateProfileService) {
    return angular.module('app.users', [])
        .config(config)
        .controller('UsersCtrl', UsersController)
        .controller('CurrentUserCtrl', CurrentUserController)
        .controller('userHeaderCtrl', userHeaderController)
        .service('updateProfileService', updateProfileService)
});