define(['angular',
        './config.route',
        './directory',
        './filters/limitUserDescriptionFilter'
    ], function (angular, config, DirectoryController, userDescriptionFilter) {
    return angular.module('app.directory', [])
        .config(config)
        .controller('DirectoryCtrl', DirectoryController)
        .filter('userDescriptionFilter', userDescriptionFilter);
});