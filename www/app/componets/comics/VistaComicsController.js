(function() {

	'use strict'
	angular.module('starter')
		.controller('VistaComicsController', VistaComicsController);

	VistaComicsController.$inject = ['$scope','$http','$state'];

	function VistaComicsController($scope, $http, $state) {

		var vm = this;
    $scope.arrayC = [];

     $scope.limit = 20;
     $scope.offset= 0;
     var variableTipo ="";

    constructor();
		function constructor() {

			console.log('holaaaaaaaaa CONTENT CONTROLLER');

      inicio();
      eventos();
		}

  

    function inicio(){

      $http({
          method: 'GET',
          url: 'https://gateway.marvel.com/v1/public/comics',
          params: {
           apikey: 'aa0ae51582275a10d30e2a7e9563020b',
           hash: '446b115292d02c5a41aaea91a52e433e',
           ts: '1',
           
          }

      }).then(function successCallback(response) {
         

          $scope.comicsListado =response.data;
           $scope.arrayC = response.data.data.results;
           $scope.inicializar();

        }, function errorCallback(response) {
          
        });

    }

   $scope.paginacion = function(){
       $scope.offset= $scope.offset + $scope.limit;
      console.log('limit'+$scope.limit);
      console.log('offset'+$scope.offset);
      $http({
          method: 'GET',
          url: 'https://gateway.marvel.com/v1/public/comics',
          params: {
           apikey: 'aa0ae51582275a10d30e2a7e9563020b',
           hash: '446b115292d02c5a41aaea91a52e433e',
           ts: '1',
           limit: $scope.limit,
           offset: $scope.offset 
          }

      }).then(function successCallback(response) {
        
          $scope.count = response.data.data.count
          $scope.arrayC = $scope.arrayC.concat(response.data.data.results);
          $scope.$broadcast('scroll.infiniteScrollComplete');

        }, function errorCallback(response) {
          
        });

     
  }

    $scope.$on('$stateChangeSuccess', function() {
      $scope.paginacion($scope.limit,$scope.offset);
     });


 $scope.paginacionEvento = function(){


      $scope.offset= $scope.offset + $scope.limit;
      console.log('limit'+$scope.limit);
      console.log('offset'+$scope.offset);
      $http({
          method: 'GET',
          url: 'https://gateway.marvel.com/v1/public/events',
          params: {
           apikey: 'aa0ae51582275a10d30e2a7e9563020b',
           hash: '446b115292d02c5a41aaea91a52e433e',
           ts: '1',
           limit: $scope.limit,
           offset: $scope.offset 
          }

      }).then(function successCallback(response) {
          

         
             $scope.count = response.data.data.count;
        
          $scope.arrayE = $scope.arrayE.concat(response.data.data.results);
         $scope.$broadcast('scroll.infiniteScrollComplete');

         
          //console.log()
        }, function errorCallback(response) {
          
        });

     
  }

    $scope.$on('$stateChangeSuccess', function() {
      $scope.paginacion($scope.limit,$scope.offset);
     });

		

    function eventos(){

      $http({
          method: 'GET',
          url: 'https://gateway.marvel.com/v1/public/events',
          params: {
           apikey: 'aa0ae51582275a10d30e2a7e9563020b',
           hash: '446b115292d02c5a41aaea91a52e433e',
           ts: '1'  
          }

      }).then(function successCallback(response) {
          
          $scope.arrayE = response.data.data.results;

          $scope.listadoEventos = response.data;
          var arrayOfObject = response.data.data.results;
         
        }, function errorCallback(response) {
          
        });

    }


   $scope.irDetalleComics = function(comic) {
       
		 $state.go('index.detalleComics', {'comic': comic});

			
	 }

   $scope.irListadoComics = function(comic) {
       
     $state.go('index.listadoComics', {'comic': comic});
  
      
    }

    $scope.irListadoEventos = function(comic) {
        console.log('esto imprimioo');
       
     $state.go('index.listadoEventos', {'comic': comic});

      
    }


	} 




})()