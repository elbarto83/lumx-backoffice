define(function () {
    function MapController(mapControllerService) {
        mapControllerService.onResume();
    }

    MapController.$inject = ['mapControllerService'];
    return MapController;
});