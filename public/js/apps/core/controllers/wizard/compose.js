'use strict';
var ff = angular.module('fact-followers.controllers');

ff.controller('composeController', function ($scope,$rootScope, $location, $timeout, $http){


	$scope.next = function(){
		console.log('hola');
		$rootScope.title= $scope.title;
		$rootScope.content = $scope.content;
		$rootScope.img = $scope.img;
		$location.path("/journalist/facts/validate");
	}
});
