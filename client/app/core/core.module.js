define(['angular',
        './config',
        'angular-ui-router',
        'angular-chart',
        'components/gmaploader/gmaploader',
        'services/services.module',
        'oclazyload',
        'lumx'], function (angular, config) {

    return angular.module('app.core', [
        'ui.router',
        'app.services',
        'lumx',
        'angular-chartist',
        'gmaploader',
        'oc.lazyLoad'
    ]).config(config);
});