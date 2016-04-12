// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
//Las pr�ximas 3 l�neas de c�digo s�lo sirven junto con los cambios en ionic.project, para evitar
//problemas con el cross origin request (CORS) a el-carabobeno.com en las pruebas en la pc
//eliminarlas para la app en el m�vil, donde no hay problemas con el CORS
.constant('ApiEndpoint', {
  url: 'http://localhost:8100/hush'
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.noticias', {
      cache: false,
      url: '/noticias',
      views: {
        'menuContent': {
          templateUrl: 'templates/section.html',
          controller: 'noticiasCtrl'
        }
      }
    })

  .state('app.deportes', {
      cache: false,
      url: '/deportes',
      views: {
        'menuContent': {
          templateUrl: 'templates/section.html',
          controller: 'deportesCtrl'
        }
      }
    })
    
    .state('app.economia', {
      cache: false,
      url: '/economia',
      views: {
        'menuContent': {
          templateUrl: 'templates/section.html',
          controller: 'economiaCtrl'
        }
      }
    })
    
    .state('app.comunidad', {
      cache: false,
      url: '/comunidad',
      views: {
        'menuContent': {
          templateUrl: 'templates/section.html',
          controller: 'comunidadCtrl'
        }
      }
    })
    
    .state('app.vida', {
      cache: false,
      url: '/vida',
      views: {
        'menuContent': {
          templateUrl: 'templates/section.html',
          controller: 'vidaCtrl'
        }
      }
    })
    
    .state('app.sociales', {
      cache: false,
      url: '/sociales',
      views: {
        'menuContent': {
          templateUrl: 'templates/section.html',
          controller: 'socialesCtrl'
        }
      }
    })
    
    .state('app.parentesis', {
      cache: false,
      url: '/parentesis',
      views: {
        'menuContent': {
          templateUrl: 'templates/section.html',
          controller: 'parentesisCtrl'
        }
      }
    })
    
    .state('app.minianuncios', {
      cache: false,
      url: '/minianuncios',
      views: {
        'menuContent': {
          templateUrl: 'templates/section.html',
          controller: 'minianunciosCtrl'
        }
      }
    })
      
  .state('app.single', {
    url: '/article/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/article.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/noticias');
});
