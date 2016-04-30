define([], function () {
    function config($stateProvider) {
        $stateProvider
            .state('map', {
                url: "/map",
                views: {
                    "title": {template: 'Carte des camps<lx-button lx-type="flat" style="position: relative;overflow: hidden;top: 15px;float: right;" >Ajouter une place</lx-button>'},
                    "main": {
                        templateUrl: require.toUrl('') + "map/map.html",
                        controllerAs: 'ctrl',
                        controller: 'MapCtrl'
                    }
                }
            });
    }

    config.$inject = ["$stateProvider"];

    return config;
});