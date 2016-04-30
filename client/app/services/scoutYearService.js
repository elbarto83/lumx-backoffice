define(['components/models/ScoutYear'], function (ScoutYear) {
    function Service() {
        service = {
            createScoutYear: createScoutYear
        };

        function createScoutYear(options) {
            return new ScoutYear({
                id: options.id,
                role: options.role,
                year: options.year,
                didpromise: options.didpromise,
                gonecamp: options.didpromise,
                unit: options.unit
            });
        }

        return service;
    }

    Service.$inject = [];
    return Service;
});