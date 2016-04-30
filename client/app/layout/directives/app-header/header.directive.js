define(function () {
   function headerDirective() {
       return {
           restrict: 'E',
           scope: {},
           controller: 'HeaderController',
           controllerAs: 'ctrl',
           templateUrl: require.toUrl('') + 'layout/directives/app-header/header.html'
       };
   }

   return headerDirective;
});