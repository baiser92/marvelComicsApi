(function() {

	'use strict'
	angular.module('starter')
		.controller('MenuController', MenuController);

	MenuController.$inject = ['$scope'];

	function MenuController($scope) {

		var vm = this;
    	constructor();
      menu();
 		
		function constructor() {

			console.log('holaaaaaaaaa ENTRE A MENU');
		//	console.log($state.params.idComics);
      
     

		} 


    function menu() {
      console.log('hola mundooo3');
      /*$scope.toggleLeft = function() {
          $ionicSideMenuDelegate.toggleLeft();


        };*/

        $scope.toggleLeft = function() {
          $ionicSideMenuDelegate.toggleLeft();
        };
    }  
    

	 


  


	} 




})()