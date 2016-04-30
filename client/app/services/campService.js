define(function () {
    function Service($http) {
        var service = {
            camp: camp
        };

        function camp() {
            return $http.get('/api/camp?full');
        }

        return service;
    }

    Service.$inject = ['$http'];
    return Service;
});