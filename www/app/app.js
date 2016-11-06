// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
 angular.module('starter', ['ionic','ngCordova','ngMaterial', 'ionic.contrib.ui.hscrollcards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) { 

  $urlRouterProvider.otherwise('/index/inicio');
  $stateProvider

    .state('index', {
    abstract: true,
    url: '/index',
    views: {
              "index": {
                    templateUrl: "app/componets/menu/menu.html",
                    controller: "MenuController as menuCtrl"
                }
            }
  })

  .state('index.inicio', {
    //abstract: true,
    url: '/inicio',
    views: {
              "inicio": {
                    templateUrl: "app/componets/comics/vistaComics.html",
                     controller: 'VistaComicsController as comicsCtrl'
              }
    }
  })

  .state('index.detalleComics', {
    url: '/detalle',
    params: {
     comic: null
   },
    views: {
              "detalleComics": {
                    templateUrl: "app/componets/comics/detalleComics.html",
                    controller: 'DetalleComicsController as detalleCtrl'
                }
            }
  })

  .state('index.listadoComics', {
    url: '/listados',
    params: {
     comic: null
   },
    views: {
              "listadoComics": {
                    templateUrl: "app/componets/comics/listadosComics.html",
                    controller: 'VistaComicsController as comicsCtrl'
                }
            }
  })

   .state('index.listadoEventos', {
    url: '/listadosE',
    params: {
     comic: null
   },
    views: {
              "listadoEventos": {
                    templateUrl: "app/componets/comics/listadoEventos.html",
                    controller: 'VistaComicsController as comicsCtrl'
                }
            }
  });


  

    


 

  // if none of the above states are matched, use this as the fallback
  
});