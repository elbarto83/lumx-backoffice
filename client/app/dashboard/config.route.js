define([], function () {
    function config($stateProvider) {
        $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                views: {
                    "title": {template: "Tableau de bord"},
                    "main": {
                        templateUrl: require.toUrl('') + "dashboard/dashboard.html",
                        controllerAs: 'ctrl',
                        controller: 'DashboardCtrl'
                    }
                }
            });
    }

    config.$inject = ["$stateProvider"];

    return config;
});