define(['angular',
        './config.route',
        './map',
        './services/mapManagerService',
        './services/mapControllerService',
        './directives/uimap'
        ],
        function (angular, config, MapController, mapManagerService, mapControllerService, uiMap) {
    return angular.module('app.map', [])
        .config(config)
        .service("mapManagerService", mapManagerService)
        .service("mapControllerService", mapControllerService)
        .controller('MapCtrl', MapController)
        .directive('uiMap', uiMap)
});