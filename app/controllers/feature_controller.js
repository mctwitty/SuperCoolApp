(function(angular) {
	'use strict';

	var app = angular.module('SuperCoolApp');
	app.controller('FeatureController', ['$scope', function($scope){
		var feature1 = {
			name: 'Feature One',
			content: 'Lorem ipsum',
			upvotes: 3,
			downvotes: 1,
			comments: 	[
							{
								id: 1,
								body: "this is definitely a comment",
								author: "anon"
							},
							{
								id: 2,
								body: "me, too",
								author: "anon2"
							}
						]
			}
		var feature2 = {
			name: 'Feature Two',
			content: 'More Lorem ipsum',
			upvotes: 5,
			downvotes: 4,
			comments: []
		};
		var feature3 = {
			name: 'Feature Three',
			content: 'Another Lorem Ipsum',
			upvotes: 2,
			downvotes: 7,
			comments: []
		};
		$scope.Features = [feature1, feature2, feature3];

		$scope.upvote = function(feature){
			feature.upvotes++;
		}
		$scope.downvote = function(feature){
			feature.downvotes++;
		}
		$scope.score = function(feature){
			return feature.upvotes - feature.downvotes;
		}
		$scope.addReview = function(feature, commentBody, commentAuthor){
			feature.comments.push({id: feature.comments.length + 1, body: commentBody, author: commentAuthor });
		}
	}]);
})(window.angular);