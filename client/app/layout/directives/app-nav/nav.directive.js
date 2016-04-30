define(function () {
    function NavbarDirective() {
        return {
            restrict: 'E',
            scope: {},
            controller: 'NavBarController',
            controllerAs: 'ctrl',
            templateUrl: require.toUrl('') + 'layout/directives/app-nav/nav.html'
        };
    }
    return NavbarDirective;
});