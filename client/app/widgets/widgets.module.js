define(['angular',
        './notificationWidget/controller',
        './notificationWidget/directive'], function (angular,
                         NoticationWidgetController,
                         notificationWidgetDirective) {
    return angular.module('app.widgets', [])
        .controller('NotificationWidgetController', NoticationWidgetController)
        .directive('appNotifWidget', notificationWidgetDirective)
});