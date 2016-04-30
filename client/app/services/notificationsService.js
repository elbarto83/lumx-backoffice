define(['components/models/Notification'], function (Notification) {
    var fakeData =  [{
        id: 1,
        type: 'group',
        isnew: true,
        content: {
            username: 'wapiti',
            user: 'Jérémi Le Bourhis',
            group: 'E2I 2013-2016'
        }
    }, {
        id: 2,
        type: 'comment',
        isnew: true,
        content: {
            user: 'Jérémi Le Bourhis'
        }
    }, {
        id: 3,
        type: 'comment',
        isnew: true,
        content: {
            user: 'Jérémi Le Bourhis'
        }
    }, {
        id: 4,
        type: 'comment',
        isnew: true,
        content: {
            user: 'Jérémi Le Bourhis'
        }
    }, {
        id: 6,
        type: 'comment',
        isnew: true,
        content: {
            user: 'Jérémi Le Bourhis'
        }
    }, {
        id: 7,
        type: 'comment',
        isnew: false,
        content: {
            user: 'Jérémi Le Bourhis'
        }
    }, {
        id: 8,
        type: 'comment',
        isnew: false,
        content: {
            user: 'Jérémi Le Bourhis'
        }
    }, {
        id: 9,
        type: 'comment',
        isnew: false,
        content: {
            user: 'Jérémi Le Bourhis'
        }
    }, {
        id: 10,
        type: 'comment',
        isnew: false,
        content: {
            user: 'Jérémi Le Bourhis'
        }
    }, {
        id: 11,
        type: 'comment',
        isnew: false,
        content: {
            user: 'Jérémi Le Bourhis'
        }
    }];

    function notificationsService($log, $q, $http) {
        var service = {
            getNotifications: getNotifications,
            notificationsRead: notificationsRead
        };

        var _notifications = {};
        var _deferred =  null; // if request in progress store promise

        function notificationsToArray() {
            var response = [];

            for(var notif in _notifications) {
                    response.push(_notifications[notif]);
            }

            return response;
        }
        function getNotifications() {
            var deferred;

            var onSuccess = function (response) {
                var notifs = response.data.notifications;
                var response = [];

                for(var i = 0; i <  notifs.length; i += 1) {
                    if(!_notifications.hasOwnProperty(notifs[i].id)) {
                        _notifications[notifs[i].id] = new Notification({
                            id: notifs[i].id,
                            type: notifs[i].type,
                            content: notifs[i].content,
                            isnew: notifs[i].isnew
                        });

                        response.push(_notifications[notifs[i].id]);
                    }
                }

                _deferred = null;
                deferred.resolve(response);
            };

            var onError = function () {
                _deferred = null;
                $log.error('Application can\'t retrieve the notifications');
                deferred.reject();
            };

            // pas notifications en local
            if(Object.keys(_notifications).length <= 1) {
                // pas de promise en cours
                if(_deferred === null) {
                    _deferred = $q.defer();
                    //$http.get('/api/me/notifications').then(onSuccess, onError);
                    var fake = {
                        data: {
                            notifications: fakeData
                        }
                    };

                    deferred = _deferred; // for test
                    onSuccess(fake); // fake response
                }

                //deferred = _deferred;

            // notifications en local
            } else {
                deferred = $q.defer();
                deferred.resolve(notificationsToArray());
            }

            return deferred.promise;
        }

        getNotifications();

        function _flush(deferred) {
            $log.info('update notifications on server');
            deferred.resolve();
        }

        function notificationsRead() {
            var deferred = $q.defer();
            for(var notif in _notifications) {
                if(_notifications.hasOwnProperty(notif)) {
                    _notifications[notif].setRead();
                } else {
                    $log('not key ' + notif + 'in notifications');
                }
            }

            _flush(deferred);

            return deferred.promise;
        }

        return service;
    }
    notificationsService.$inject = ['$log', '$q', '$http'];
    return notificationsService;
});