/**
 * Created by jeremi on 05/04/2016.
 */
define(function () {
    function mapControllerService(mapManagerService, campService, LxDialogService) {
        var service = {
            onResume: onResume
        };

        var _map = null;
        var markers = [];
        var _camps = null;

        function onCreate() {
            mapManagerService.onReady().then(function () {
                var mapOptions = {
                    center: new google.maps.LatLng(46.48361, 2.52639),
                    zoom: 6,
                    styles: [{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":50},{"hue":"#50a5d1"}]}]
                };
                mapManagerService.createMap(mapOptions).then(function (map) {
                    _map = map;
                    initMap();
                });
            });
        }

        function onResume () {
            if(_map === null) {
                onCreate();
            } else {
                initMap();
            }

            console.log("init map or resume")
        }

        function initMap() {
            campService.camp().then(function (response) {
                _camps = response.data.camps;
                var marker;
                var camp;
                var icon;
                var place;
                for(var i = 0; i < _camps.length; i += 1) {
                    camp = _camps[i];
                    if(camp.places) {
                        for(var j = 0; j < camp.places.length; j += 1) {
                            place = camp.places[j];
                            if(place.type === "visit") {
                                icon = require.toUrl('') + '../img/visit.png';
                            } else if(place.type === "pilgrimage") {
                                icon = require.toUrl('') + '../img/pele.png';
                            } else {
                                icon = require.toUrl('') + '../img/camp.png';
                            }

                            marker = new google.maps.Marker({
                                map: _map,
                                position: new google.maps.LatLng(place.lat, place.lng),
                                icon: require.toUrl('') + '../img/visit.png'
                            });

                            marker.set("camp", camp);
                            marker.set("place", j);

                            marker.addListener('click', function () {
                                LxDialogService.open('test-dialog');
                            });

                            markers.push(marker);
                        }
                    }
                }
            });
        }

        return service;
    }

    mapControllerService.$inject = ['mapManagerService', 'campService', 'LxDialogService'];
    return mapControllerService;
});