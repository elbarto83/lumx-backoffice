define([], function () {
    function config($stateProvider) {

        $stateProvider
            .state('user-profile', {
                url: "/user/:username",
                views: {
                    "title": {template: 'Profil utilisateur'},
                    "main": {
                        templateUrl: require.toUrl('') + "users/views/profile.html",
                        controllerAs: 'ctrl',
                        controller: 'UsersCtrl'
                    }
                }
            })
            .state('user-parameters', {
                url: "/profile",
                views: {
                    "title": {
                        templateUrl: require.toUrl('') + "users/views/header.html",
                        controllerAs: 'ctrl',
                        controller: 'userHeaderCtrl'
                    },
                    "main": {
                        templateUrl: require.toUrl('') + "users/views/profile.html",
                        controllerAs: 'ctrl',
                        controller: 'CurrentUserCtrl'
                    }
                }
            });
    }

    config.$inject = ["$stateProvider"];
    return config;
});