'use strict';
var ff = angular.module('fact-followers.controllers');

ff.controller('validateFactController', function ($scope,$location, $timeout, $http){
	$scope.facts = [];
	$scope.facts.push({
		title: "Hallan restos de una embarcacion perdida en Brasil.",
		where: "Rio Janeiro, Brasil",
		name: "Juana Chana"
	});
	$scope.facts.push({
		title: "Gimnasia venció a Godoy Cruz",
		where: "La Plata, Argentina",
		name: "Lucas Rudi"
	});
	$scope.facts.push({
		title: "Arsat-1 está listo para ser lanzado al espacio.",
		where: "Pilar, Argentina",
		name: "Maricela Moran"
	});

	$scope.facts.push({
		title: "Se realiza HackHackers en Centro Cultural Konex",
		where: "Buenos Aires, Argentina",
		name: "Maricela Moran"
	});


	$scope.counter = 0;
	$scope.count = function(){
		$scope.counter++;
		$("#owl-demo").next();
	} 



  $timeout(function(){

    $("#owl-demo").owlCarousel({
      autoPlay: 5000, //Set AutoPlay to 3 seconds
      singleItem:true
    });
    $("#owl-demo").show();
  },1000);
});
