/**
 * angaccordion
 * Accordion directive for AngularJS
 * Licensed under the MIT license
 */
define(['angular', 'angular-material-icons'], function (angular) {
    'use strict';
    angular.module('angAccordion', ['ngMdIcons'])
        .controller('angAccordionController', ['$scope', function($scope){
            var collapsibleItems = [];

            this.openCollapsibleItem = function(collapsibleItemToOpen) {
                if( $scope.oneAtATime ) {
                    angular.forEach(collapsibleItems, function(collapsibleItem) {
                        collapsibleItem.isOpenned = false;
                    });
                }

                collapsibleItemToOpen.isOpenned = true;
            };

            this.addCollapsibleItem = function(collapsibleItem) {
                collapsibleItems.push(collapsibleItem);

/*                if ( $scope.closeIconClass !== undefined || $scope.openIconClass !== undefined ) {
                    collapsibleItem.iconsType = 'class';
                    collapsibleItem.closeIcon = $scope.closeIconClass;
                    collapsibleItem.openIcon = $scope.openIconClass;
                }
                else if ( $scope.closeIconUrl !== undefined || $scope.openIconUrl !== undefined ) {
                    collapsibleItem.iconsType = 'url';
                    collapsibleItem.closeIcon = $scope.closeIconUrl;
                    collapsibleItem.openIcon = $scope.openIconUrl;
                }

                collapsibleItem.iconIsOnLeft = $scope.iconPosition == 'left';
                */
            };

        }])
        .directive('angAccordion', function() {
            return {
                restrict: 'E',
                transclude: true,
                replace: true,
                scope: {
                    oneAtATime: '@',
                    closeIconUrl: '@',
                    openIconUrl: '@',
                    closeIconClass: '@',
                    openIconClass: '@',
                    iconPosition: '@'
                },
                controller: 'angAccordionController',
                templateUrl: require.toUrl('') + 'components/sidebar/angular-accordion.html'
            };
        })
        .directive('collapsibleItem', function() {
            return {
                require: '^angAccordion',
                restrict: 'E',
                transclude: true,
                replace: true,
                scope: {
                    itemTitle: '@',
                    itemLink: '@',
                    itemDisabled: '=',
                    initiallyOpen: '='
                },
                link: function($scope, element, attrs, accordionController) {
                    $scope.isOpenned = ($scope.initiallyOpen) ? true : false;
                    accordionController.addCollapsibleItem($scope);
                    getIcon();

                    $scope.toggleCollapsibleItem = function () {
                        if($scope.itemDisabled)
                        {
                            return;
                        }
                        else if(!$scope.isOpenned)
                        {
                            $scope.isOpenned = true;
                            getIcon();
                            accordionController.openCollapsibleItem(this);
                        }
                        else
                        {
                            $scope.isOpenned = false;
                            getIcon();
                        }
                    };

                    $scope.isLink = ($scope.itemLink !== undefined);

                    function getIcon() {
                        if($scope.isOpenned) {
                            $scope.icon = 'remove';
                            $scope.size = '20';
                            $scope.color = 'black';
                            $scope.rotation = 'none';
                        } else {
                            $scope.icon = 'expand_more';
                            $scope.size = '20';
                            $scope.color = 'black';
                            $scope.rotation = 'none';
                        }
                    }
                },
                templateUrl: require.toUrl('') + 'components/sidebar/angular-accordion-item.html'
            };
        });
});