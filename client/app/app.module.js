define(['angular',
        './app.config',
        'core/core.module',
        'layout/layout.module',
        'widgets/widgets.module',
        'dashboard/dashboard.module',
        'users/users.module',
        'network/network.module',
        'directory/directory.module',
        'map/map.module',
        'lumx'], function (angular, config) {
    'use strict';

    function run($state, usersService, $ocLazyLoad, $log) {
        usersService.getConnectedUser().then(function (user) {
           if(user.isAdmin() === true) {
               $log.info('user is admin');
               $ocLazyLoad.load('admin/admin.module');
           } else {
               $log.info('user is not admin');
           }
        });

        $state.go('dashboard');
    }

    run.$inject = ['$state', 'usersService', '$ocLazyLoad', '$log'];
    /**
     * Main module of the application.
     */
    return angular.module('app', [
        'app.core',
        'app.widgets',
        'app.layout',

        'app.users',
        'app.dashboard',
        'app.map',
        'app.directory',
        'app.network'
    ]).run(run).config(config);
});
