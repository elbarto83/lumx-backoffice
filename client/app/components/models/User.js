define(["angular"], function (angular) {

    /**
     *
     * @param message
     * @constructor
     */
    function AddressError(message) {
        this.name = 'AddressError';
        this.message = message;
    }

    /**
     *
     * @param message
     * @constructor
     */
    function TotemError(message) {
        this.name = 'TotemError';
        this.message = message;
    }

    function User(options) {
        var _id = options.id;
        var _username = options.username;
        var _email = options.email;
        var _firstname = options.firstname;
        var _lastname = options.lastname;

        var _lastlogin = options.lastlogin||null;
        var _isadmin = options.isAdmin||null;


        var _totem = {
            totem: options.totem||null,
            adjective: options.totem||null
        };

        var _address = {
            address1: options.address1||null,
            address2: options.address2||null,
            zipcode: options.zipcode||null,
            city: options.city||null,
            country: options.country||null
        };


        var _phonenumber = options.phonenumber||'';
        var _description = options.description||'';
        var _scoutyears = options.scoutyears||[];


        // compute variables
        var _promiseyear = null;


        if(_scoutyears.length > 0) {
            _promiseyear = this.getYearPromiseFromData(_scoutyears);
        }

        /**
         *
         * @returns {string}
         */
        this.getId = function () {
            return _id;
        };

        /**
         *
         * @returns {string}
         */
        this.getUsername = function () {
            return _username;
        };

        /**
         *
         * @returns {email}
         */
        this.getEmail = function () {
            return _email;
        };

        /**
         *
         * @returns {string}
         */
        this.getFirstname = function () {
            return _firstname;
        };

        /**
         *
         * @returns {string}
         */
        this.getLastname = function () {
            return _lastname;
        };

        /**
         *
         * @return {string}
         */
        this.getFullname = function () {
            return _firstname + ' ' + _lastname;
        };

        /**
         *
         * @returns {string}
         */
        this.getLastLogin = function () {
            return _lastlogin;
        };

        /**
         *
         * @returns {string}
         */
        this.isAdmin = function () {
            return _isadmin;
        };

        /**
         *
         * @returns {string}
         */
        this.getFormattedAddress = function () {
            var address = '';

            if(_address.address1 !== null && _address.zipcode !== null &&
                _address.city !== null && _address.country !== null) {
                address += _address.address1 + ' ';
                address += (_address.address2 === '' || _address.address2 === null)? '': _address.address2 + ' ';
                address += _address.zipcode + ' ';
                address += _address.city + ' ';
                address += _address.country + ' ';
            }

            return address;
        };

        /**
         *
         * @returns {string}
         */
        this.getFormattedTotem = function () {
            var totem = '';
            if(_totem.totem !== null) {
                totem = _totem.totem;
            }

            return totem;
        };

        /**
         *
         * @returns {{address1: string|null, address2: string|null, zipcode: string|null, city: string|null, country: string|null}}
         */
        this.getAddress = function () {
            return {
                address1: _address.address1||"",
                address2: _address.address2||"",
                zipcode: _address.zipcode||"",
                city: _address.city||"",
                country: _address.country||""
            };
        };

        /**
         *
         * @param address1
         * @param address2
         * @param zipcode
         * @param city
         * @param country
         * @returns {boolean}
         */
        this.setAddress = function (address) {
            if(address.address1 === null ||  angular.isUndefined(address.address1)) {throw new AddressError('address1 undefined or null');}
            if(address.address2 === null  || angular.isUndefined(address.address2)) {throw new AddressError('address2 undefined or null');}
            if(address.zipcode === null  || angular.isUndefined(address.zipcode)) {throw new AddressError('zipcode undefined or null');}
            if(address.city === null  || angular.isUndefined(address.city)) {throw new AddressError('city undefined or null');}
            if(address.country === null  || angular.isUndefined(address.country)) {throw new AddressError('country undefined or null');}

            _address.address1 = address.address1;
            _address.address2 = address.address2;
            _address.zipcode = address.zipcode;
            _address.city = address.city;
            _address.country = address.country;

            return true;
        };

        /**
         *
         * @returns {{totem: string|null, adjective: string|null}}
         */
        this.getTotem = function () {
            return _totem.totem;
            //return {
            //    totem: _totem.totem,
            //    adjective: _totem.adjective
            //};
        };

        /**
         *
         * @param totem
         * @param adjective
         * @returns {boolean}
         */
        this.setTotem = function (totem, adjective) {
            if(totem === null && angular.isUndefined(totem)) {throw new TotemError('totem undefined or null');}
            //if(angular.isNull(address2) && angular.isUndefined(address1)) {throw new TotemError('adjective undefined or null');}
            console.log(totem);
            _totem.totem = totem;
            //_totem.adjective = adjective;

            return true;
        };

        /**
         *
         * @returns {string}
         */
        this.getDescription = function () {
            return _description||'';
        };

        /**
         *
         * @param description
         */
        this.setDescription = function (description) {
            _description = description;
        };

        /**
         *
         * @returns {string}
         */
        this.getPhoneNumber = function () {
            return _phonenumber||'';
        };

        /**
         *
         * @param phonenumber
         */
        this.setPhoneNumber = function (phonenumber) {
            _phonenumber = phonenumber;
        };

        this.addScoutYear = function (scoutyear) {
            _scoutyears.push(scoutyear);
        };

        // copy the array to not manipulate directly the array object
        this.getScoutYears = function () {
            var sy = [];

            for(var i = 0; i < _scoutyears.length; i += 1) {
                sy.push(_scoutyears[i]);
            }

            return sy;
        };

        /**
         * Say if the user has already pronounce his promise
         * @returns {boolean}
         */
        this.hasPromise = function () {
            return (_promiseyear !== null);
        };

        /**
         * Return the year of the promise
         * @returns {string}
         */
        this.getPromiseYear = function () {
            return _promiseyear;
        };
    }

    User.prototype.getYearPromiseFromData = function (scoutyear) {
        var year = null;
        for(var i = 0; i < scoutyear; i += 1) {
            if(scoutyear[i].getDidPromise() === true) {
                year = scoutyear[i].getYear();
            }
        }

        return year;
    };

    return User;
});
//#ROGER
// 0792300681 : texto
// 0679466990 : appels