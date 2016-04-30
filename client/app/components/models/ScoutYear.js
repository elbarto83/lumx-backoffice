define(function () {
    function ScoutYear(options) {
        console.log(options);
        var _id = options.id||null;
        var _didpromise = options.didpromise;
        var _gonecamp = options.gonecamp;
        var _year = options.year;
        var _role = options.role;
        var _name = options.unit.getName();

        // just a setter to have a shared reference
        var _unit = options.unit||null;


        this.getId = function () {
            return _id;
        };

        this.setId = function (id) {
            _id = id;
            return this;
        };

        this.getDidPromise = function () {
            return _didpromise;
        };

        this.setDidPromise = function (didpromise) {
            _didpromise = didpromise;
            return this;
        };

        this.getGoneCamp = function () {
            return _gonecamp;
        };

        this.setGoneCamp = function (gonecamp) {
            _gonecamp = gonecamp;
            return this;
        };

        this.getYear = function () {
            return _year;
        };

        this.setYear = function (year) {
            _year = year;
            return this;
        };

        this.getUnitname = function () {
            return _name;
        };

        this.setUnitname = function (name) {
            _name = name;
            return this;
        };


        this.getRole = function () {
            return _role;
        };

        this.setRole = function (role) {
            if(role !== 'scout' || role !== 'chef') {
                throw new Error('The argument role should be equal to scout or chef');
            }

            _role = role;
            return this;
        };
    }
    return ScoutYear;
});