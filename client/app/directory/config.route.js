define([], function () {
    function config($stateProvider) {
        $stateProvider
            .state('directory', {
                url: "/directory",
                views: {
                    "title": {template: "Annuaire scout"},
                    "main": {
                        templateUrl: require.toUrl('') + "directory/views/directory.html",
                        controllerAs: 'ctrl',
                        controller: 'DirectoryCtrl'
                    }
                }
            });
    }

    config.$inject = ["$stateProvider"];

    return config;
});

