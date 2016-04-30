define(['angular',
        './directives/app-nav/nav.directive',
        './directives/app-nav/nav.controller',
        './directives/app-header/header.directive',
        './directives/app-header/header.controller',
        './services/sidebar',
        'components/sidebar/angular-accordion',
        'lumx'
        ], function (angular, NavDirective, NavController, HeaderDirective, HeaderController, SideBarService) {
    return angular.module('app.layout', ['angAccordion', 'lumx'])
        .controller('NavBarController', NavController)
        .directive('appNav', NavDirective)
        .controller('HeaderController', HeaderController)
        .directive('appHeader', HeaderDirective)
        .service('SidebarService', SideBarService)
});