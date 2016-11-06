(function() {

	'use strict'
	angular.module('starter')
		.controller('DetalleComicsController', DetalleComicsController);

	DetalleComicsController.$inject = ['$scope','$http','$state'];

	function DetalleComicsController($scope, $http, $state) {

		var vm = this;
    	constructor();

 		
		function constructor() {
      
      buscarComics($state.params.comic);

		} 
    

	   function buscarComics(comic){

      $scope.arrayDetalleComics = comic;

     }


  


	} 




})()