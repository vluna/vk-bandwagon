'use strict';

/**
 * @ngdoc overview
 * @name vkBandwagonApp
 * @description
 * # vkBandwagonApp
 *
 * Main module of the application.
 */
angular
  .module('vkBandwagonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/switch', {
        templateUrl: 'views/switch.html',
        controller: 'SwitchCtrl',
        controllerAs: 'switch'
      })
      .when('/fight', {
        templateUrl: 'views/fight.html',
        controller: 'FightCtrl',
        controllerAs: 'fight'
      })
      .when('/discuss', {
        templateUrl: 'views/discuss.html',
        controller: 'DiscussCtrl',
        controllerAs: 'discuss'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
