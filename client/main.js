require.config({
    baseUrl: '/app',
    paths: {
        'jquery': '../libs/jquery/dist/jquery.min',
        'angular-chart': '../libs/angular-chartist.js/dist/angular-chartist.min',
        'chartist': '../libs/chartist/dist/chartist.min',
        'angular': '../libs/angular/angular.min',
        'angular-ui-router': '../libs/angular-ui-router/release/angular-ui-router.min',
        'oclazyload': '../libs/oclazyload/dist/ocLazyLoad.require.min',
        'lumx': '../libs/lumx/dist/lumx.min',
        'moment-with-locales': '../libs/moment/min/moment-with-locales.min',
        'velocity': '../libs/velocity/velocity.min',
        'angular-material-icons': '../libs/angular-material-icons/angular-material-icons.min',
        'svg-morpheus': '../libs/svg-morpheus/compile/minified/svg-morpheus',
        'css': '../libs/require-css/css.min',
        'vis': '../libs/vis/dist/vis.min',
        'facebook': '//connect.facebook.net/en_US/sdk'
    },
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'lumx': {
            deps: ['angular', 'jquery', 'velocity','css!../css/lumx', 'moment-with-locales',
            //    'css!../libs/angular-material-icons/angular-material-icons'
            ],
            exports: 'lumx'
        },
        'oclazyload': ['angular'],
        'angular-chart': {
            deps: ['css!../libs/chartist/dist/chartist.min', 'chartist', 'angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-material-icons': {
            deps: ['angular', 'svg-morpheus']
        },
        'vis': {
            deps: ['css!../libs/vis/dist/vis.min'],
            exports: 'vis'
        },
        'facebook': {
            exports: 'FB',
            init: function (bar) {
              FB.init({
                  appId: 'YOUR_KEY',
                  status: true,
                  cookie: true,
                  xfbml: true,
                  version: 'v2.4'
              });
            }
        }
    }
});

window.name = 'NG_DEFER_BOOTSTRAP!';

require(['angular', 'app.module', 'jquery', 'facebook'], function (angular, app) {
    angular.bootstrap(document, [app.name]);
    angular.element(document).ready(function() {
        angular.resumeBootstrap();
    });
});
