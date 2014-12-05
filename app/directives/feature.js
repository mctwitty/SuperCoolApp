(function(angular) {
	var app = angular.module('SuperCoolApp');

	app.directive('scFeature', function() {
		return {
			restrict: 'E',
			replace: true,
			template: 'hello there'
			// templateUrl: 'templates/feature_layout.html'
		}
	});
})(window.angular)