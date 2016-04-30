define(function () {
    function Controller($timeout, notificationsService) {
        var _this = this;

        this.notifications = [];

        function getIcon(type) {
            if(type === 'group') {
                return 'flag';
            } else if (type === 'comment') {
                return 'comment-text';
            }
        }

        function processNotifications(notifs) {
            for(var i = 0; i < notifs.length; i += 1) {
                _this.notifications.push({
                    type: notifs[i].getType(),
                    icon: getIcon(notifs[i].getType()),
                    isnew: notifs[i].isNew(),
                    content: notifs[i].getContent()
                });
            }
        }

        notificationsService.getNotifications().then(function (notifs) {
            processNotifications(notifs);
        });

        this.getCount = function () {
            var count = 0;
            for(var i = 0; i < _this.notifications.length; i += 1) {
                if(_this.notifications[i].isnew === true) {
                    count += 1;
                }
            }

            return count;
        };

        this.notificationsRead = function () {
            $timeout(function () {
                notificationsService.notificationsRead().then(function () {
                    for(var i = 0; i < _this.notifications.length; i += 1) {
                        _this.notifications[i].isnew = false;
                    }
                });
            }, 1500);
        };
    }

    Controller.$inject = ['$timeout', 'notificationsService'];
    return Controller;
});