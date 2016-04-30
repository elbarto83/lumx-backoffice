define(['angular',
        './config.route',
        './controllers/dashboard',
        './controllers/users',
        './controllers/places',
        './controllers/comments'
        ],
        function (angular, config, DashboardController, UsersController, PlacesController, CommentsController) {
    return angular.module('app.admin', [])
        .config(config)
        .controller('AdminDashboardCtrl', DashboardController)
        .controller('AdminUsersCtrl', UsersController)
        .controller('AdminPlacesCtrl', PlacesController)
        .controller('AdminCommentsCtrl', CommentsController)
});