define([], function () {
    function config($stateProvider) {
        $stateProvider
            .state('admin-dashboard', {
                url: "/admin/dashboard",
                views: {
                    "title": {template: "Vue d'ensemble"},
                    "main": {
                        templateUrl: require.toUrl('') + "admin/views/dashboard.html",
                        controllerAs: 'ctrl',
                        controller: 'AdminDashboardCtrl'
                    }
                }
            })
            .state('admin-users', {
                url: "/admin/users",
                views: {
                    "title": {template: "Gestion des droits utilisateurs"},
                    "main": {
                        templateUrl: require.toUrl('') + "admin/views/users.html",
                        controllerAs: 'ctrl',
                        controller: 'AdminUsersCtrl'
                    }
                }
            })
            .state('admin-comments', {
                url: "/admin/comments",
                views: {
                    "title": {template: "Gestion des commentaires"},
                    "main": {
                        templateUrl: require.toUrl('') + "admin/views/comments.html",
                        controllerAs: 'ctrl',
                        controller: 'AdminCommentsCtrl'
                    }
                }
            })
            .state('admin-places', {
                url: "/admin/places",
                views: {
                    "title": {template: "Gestion des places"},
                    "main": {
                        templateUrl: require.toUrl('') + "admin/views/places.html",
                        controllerAs: 'ctrl',
                        controller: 'AdminPlacesCtrl'
                    }
                }
            });
    }

    config.$inject = ["$stateProvider"];
    return config;
});