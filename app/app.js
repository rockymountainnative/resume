'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngCookies',
  'ngRoute',
  'ngAnimate',
  'myApp.html',
//  'myApp.pdf',
  'myApp.services',
  'ui.bootstrap'
])

// Default to html resume view if we don't have a valid route.
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/html'});
}])

// NavBarCtrl
.controller('NavBarCtrl', ['$location', '$scope', '$cookies', '$timeout', function($location, $scope, $cookies, $timeout) {
  $scope.navbarCollapsed = true;
  console.log("hi!");
}])

// End myApp
;
