define(['components/models/Unit'], function (Unit) {
    function Service() {
        var service = {
            hasUnit: hasUnit,
            getUnit: getUnit,
            createUnit: createUnit
        };

        var _units = {};

        function createUnit(options) {
            var unit = null;

            if(!hasUnit(options.id)) {
                console.log('create unit');
                unit = new Unit({
                    id: options.id,
                    name: options.name,
                    year: options.year
                });

                _units[options.id] = unit;
            }

            return unit;
        }

        function hasUnit(id) {
            return _units.hasOwnProperty(id);
        }

        function getUnit(id) {
            var unit = null;
            if(_units.hasOwnProperty(id)) {
                unit = _unit[id];
            }
            return unit;
        }

        return service;
    }

    Service.$inject = [];
    return Service;
});