define(function () {
    function Unit(options) {
        var _id = options.id;
        var _name = options.name;
        var _year = options.year;

        this.getId = function () {
            return _id;
        };

        this.setId = function (id) {
            _id = id;
            return this;
        };

        this.getName = function () {
          return _name;
        };

        this.setName = function (name) {
            _name = name;
            return this;
        };

        this.getYear = function () {
            return _year;
        };

        this.setYear = function (year) {
            _year = year;
            return this;
        };
    }

    return Unit;
});