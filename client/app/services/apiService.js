define(['angular'], function (angular) {
    var module = angular.module('common', []);

    module.service('Me', ['$http', function ($http) {
        var service = {
            me: me,
            stats: stats,
            cocktails: cocktails
        };

        function me() {
            return $http.get('/api/me');
        }

        function stats() {
            return $http.get('/api/me/stats');
        }

        function cocktails() {
            return $http.get('/api/me/cocktails');
        }

        return service;
    }]);
});