'use strict';
var ff = angular.module('fact-followers.controllers');

ff.controller('createFactController', function ($rootScope, $scope,$location, $timeout, $http){

	$scope.next = function(){
		console.log('hola');
		$rootScope.where= $scope.where;
		$rootScope.when= $scope.when;
		$rootScope.what= $scope.what;
		$location.path("/journalist/article/compose");
	}
});
