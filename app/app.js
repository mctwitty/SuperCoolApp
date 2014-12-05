(function(angular) {'use strict';

// Declare app level module which depends on views, and components
	var app = angular.module('SuperCoolApp', ['ngRoute']);
	  // 'SuperCoolApp.view1'
	  // ,'myApp.version'
	app.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/app'});
	}]);
	app.directive('feature', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/feature_layout.html'
		};
	});
})(window.angular);