'use strict';

//-----------------------------------------------------------------------------
/* Define gameBoard controller */
//-----------------------------------------------------------------------------
angular.module('myApp.html', ['ngRoute', 'ngCookies', 'ngSanitize'])

//-----------------------------------------------------------------------------
// Configure Route for game-bard view
//-----------------------------------------------------------------------------
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/html', {
    templateUrl: 'html/html.html',
    controller: 'htmlCtrl'
  });
}])

//-----------------------------------------------------------------------------
// Define controller
//-----------------------------------------------------------------------------
.controller('htmlCtrl',
            ['$location', '$scope', '$cookies', '$sanitize', 'ResumeSvc',
            function($location, $scope, $cookies, $sanitize, ResumeSvc) {

  // Retrieve available levels
  ResumeSvc.get({}, function(data) {
    $scope.resume = data;
  });


}]) // end controller

//-----------------------------------------------------------------------------
// Filters
//-----------------------------------------------------------------------------
// Provides filter to capitalize first letter in every input.
.filter('capitalize', function() {
  return function(input) {
    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
  }
}) // end filter

;// End module
