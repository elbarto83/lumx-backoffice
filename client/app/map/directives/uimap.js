/**
 * Created by jeremi on 05/04/2016.
 */
define(function () {
    function mapDirective(mapManagerService) {
        return {
            restrict: 'A',
            scope: {},
            template: '<div class="map-canvas"></div>',
            link: function (scope, element, attrs, controller) {
                if(mapManagerService.hasElement()) {
                    element.replaceWith(mapManagerService.getElement());
                } else {
                    mapManagerService.setElement(element.children()[0]);
                }
            }
        };
    }

    mapDirective.$inject = ['mapManagerService'];
    return mapDirective;
});