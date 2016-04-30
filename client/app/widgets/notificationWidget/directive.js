define(function () {
    function directive() {
        return {
            restrict: 'E',
            scope: {},
            controller: 'NotificationWidgetController',
            controllerAs: 'ctrl',
            templateUrl: require.toUrl('') + 'widgets/notificationWidget/template.html'
        };
    }

    directive.$inject = [];
    return directive;
});