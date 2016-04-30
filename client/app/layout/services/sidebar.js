define(function () {
    function service($window, $rootScope) {
        var sidebarIsShown = false;
        var _listeners = {};
        var service = {
            toggleSidebar : toggleSidebar,
            hideSidebar: hideSidebar,
            isSidebarShown : isSidebarShown,
            addListener: addListener
        };

        function toggleSidebar() {
            sidebarIsShown = !sidebarIsShown;
            notify();
        }

        function isSidebarShown() {
            return sidebarIsShown;
        }

        function hideSidebar() {
            if(sidebarIsShown === true) {
                sidebarIsShown = false;
                notify();
            }
        }

        function addListener(id, callback) {
            if(typeof callback === 'function') {
                if(!_listeners.hasOwnProperty(id)) {
                    _listeners[id] = callback;
                    return true;
                }
            }

            return false;
        }

        function notify() {
            for(var key in _listeners) {
                _listeners[key](sidebarIsShown);
            }

            if($rootScope.$root.$$phase !== '$apply' && $rootScope.$root.$$phase !== '$digest') {
                $rootScope.$digest();
            }
        }

        // hide the sidebar on resize if open
        var w = angular.element($window);
        w.bind('resize', function () {
            if(sidebarIsShown === true) {
                sidebarIsShown = false;
                notify();
            }
        });

        return service;
    }

    service.$inject = ['$window', '$rootScope'];
    return service;
});