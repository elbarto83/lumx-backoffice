define([], function () {
    function config($stateProvider) {
        $stateProvider
            .state('network', {
                url: "/network",
                views: {
                    "title": {template: "Mes réseaux"},
                    "main": {
                        templateUrl: require.toUrl('') + "network/network.html",
                        controllerAs: 'ctrl',
                        controller: 'NetworkCtrl'
                    }
                }
            });
    }

    config.$inject = ["$stateProvider"];

    return config;
});