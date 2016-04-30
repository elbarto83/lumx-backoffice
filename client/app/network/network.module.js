define(['angular', './config.route', './network', './directives/uinetwork'],
        function (angular, config, NetworkController, uiNetwork) {
    return angular.module('app.network', [])
        .config(config)
        .directive("uiNetwork", uiNetwork)
        .controller('NetworkCtrl', NetworkController);
});