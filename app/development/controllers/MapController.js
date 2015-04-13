'use strict';

angular.module('angular-here-maps-development')
  .controller('MapController', function($scope) {
    $scope.iconContent = 'ABC';
    $scope.newIconContent = 'GHI';
    $scope.windowContent = 'DEF';
    $scope.map = {
      zoom : 14,
      center : { 
        lng: -0.135559,
        lat: 51.513872
      }
    };
    $scope.marker = {
      coordinates : {
        lng: -0.14,
        lat: 51.513872
      },
      icon : {
        type: 'html',
        template: '<div>a</div>',
        window: {
          template: '<div>this is the window template</div>'
        }
      }
    };

    $scope.number = 0;

    $scope.incrementByOne = function() {
      $scope.number++;
    };

    $scope.decrementByOne = function() {
      $scope.number--;
    };

    $scope.markers = {
      locations: [
        {
          coordinates: {
            lng: -0.135559,
            lat: 51.513872
          },
          icon: {
            type: 'html',
            template: '<div>does this work?</div>',
            window: {
              template: '<div>{{ number }} <div ng-click="incrementByOne()">add one</div></div>'
            }
          }
        },
        {
          coordinates: {
            lng: -0.16,
            lat: 51.513872
          },
          icon: {
            window: {
              template: '<div>{{ number }} <div ng-click="decrementByOne()">remove one</div></div>'
            }
          }
        }
      ],
      icon: {
        type: 'html',
        template: '<div ng-bind="content"></div>',
        window: {
          template: '<div>this is the window template</div>'
        }
      }
    };
  });