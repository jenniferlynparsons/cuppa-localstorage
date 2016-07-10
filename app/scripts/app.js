'use strict';

/**
 * @ngdoc overview
 * @name cuppaApp
 * @description
 * # cuppaApp
 *
 * Main module of the application.
 */
angular
  .module('cuppaApp', [
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/new', {
        templateUrl: 'views/teanew.html',
        controller: 'TeanewCtrl',
        controllerAs: 'teanew'
      })
      .when('/tealist', {
        templateUrl: 'views/tealist.html',
        controller: 'TealistCtrl',
        controllerAs: 'tealist'
      })
      .when('/teadetails', {
        templateUrl: 'views/teadetails.html',
        controller: 'TeadetailsCtrl',
        controllerAs: 'teadetails'
      })
      .when('/teanew', {
        templateUrl: 'views/teanew.html',
        controller: 'TeanewCtrl',
        controllerAs: 'teanew'
      })
      .when('/teanew', {
        templateUrl: 'views/teanew.html',
        controller: 'TeanewCtrl',
        controllerAs: 'teanew'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
