define([], function () {
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true).hashPrefix('');

        $stateProvider
            .state('main', {
                url: '/',
                redirectTo: 'dashboard',
                onEnter: function($state) {
                    $state.go('dashboard');
                }
            })
            .state('404', {
                url: '/404',
                views: {
                    "main": {
                        templateUrl: require.toUrl('') + '../404.html'
                    }
                }
            });

        //$urlRouterProvider.otherwise('404');
    }

    config.$inject = ["$stateProvider", '$urlRouterProvider', '$locationProvider'];
    return config;
});