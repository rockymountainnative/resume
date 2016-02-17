'use strict';

/* Define resource services */
angular.module('myApp.services', ['ngResource'])

// Configure GameBoard service
.factory('ResumeSvc', ['$resource', function($resource) {
  return $resource('data/resume.json', {}, {
    query: {method:'GET', params:{}, isArray:false}
  });
}])

;// End module
