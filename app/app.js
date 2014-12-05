'use strict';

// Declare app level module which depends on views, and components
angular.module('SuperCoolApp', [
  'ngRoute',
  'SuperCoolApp.view1',
  'SuperCoolApp.view2',
  'SuperCoolApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
