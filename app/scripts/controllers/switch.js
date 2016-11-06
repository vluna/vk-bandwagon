'use strict';

/**
 * @ngdoc function
 * @name vkBandwagonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vkBandwagonApp
 */
angular.module('vkBandwagonApp')
  .controller('SwitchCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('./games-schedule').success(function(data){
        $scope.datas = data.schedule;
        console.log($scope.datas);
        
    });
  }]);
