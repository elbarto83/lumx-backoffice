define(['angular', './config.route', './dashboard'], function (angular, config, DashboardController) {
    return angular.module('app.dashboard', [])
        .config(config)
        .controller('DashboardCtrl', DashboardController)
});