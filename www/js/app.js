// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
//Las próximas 3 líneas de código sólo sirven junto con los cambios en ionic.project, para evitar
//problemas con el cross origin request (CORS) a el-carabobeno.com en las pruebas en la pc
//eliminarlas para la app en el móvil, donde no hay problemas con el CORS
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
      
      url: '/noticias',
      views: {
        'menuContent': {
          templateUrl: 'templates/SeccionNoticias.html',
          controller: 'noticiasCtrl'
        }
      }
    })

  .state('app.deportes', {
      
      url: '/deportes',
      views: {
        'menuContent': {
          templateUrl: 'templates/SeccionDeportes.html',
          controller: 'deportesCtrl'
        }
      }
    })
    
    .state('app.economia', {
      
      url: '/economia',
      views: {
        'menuContent': {
          templateUrl: 'templates/SeccionEconomia.html',
          controller: 'economiaCtrl'
        }
      }
    })
    
    .state('app.comunidad', {
      
      url: '/comunidad',
      views: {
        'menuContent': {
          templateUrl: 'templates/SeccionComunidad.html',
          controller: 'comunidadCtrl'
        }
      }
    })
    
    .state('app.vida', {
      
      url: '/vida',
      views: {
        'menuContent': {
          templateUrl: 'templates/SeccionVida.html',
          controller: 'vidaCtrl'
        }
      }
    })
    
    .state('app.sociales', {
      
      url: '/sociales',
      views: {
        'menuContent': {
          templateUrl: 'templates/SeccionSociales.html',
          controller: 'socialesCtrl'
        }
      }
    })
    
    .state('app.parentesis', {
      
      url: '/parentesis',
      views: {
        'menuContent': {
          templateUrl: 'templates/SeccionParentesis.html',
          controller: 'parentesisCtrl'
        }
      }
    })
    
    .state('app.minianuncios', {
      
      url: '/minianuncios',
      views: {
        'menuContent': {
          templateUrl: 'templates/SeccionMinianuncios.html',
          controller: 'minianunciosCtrl'
        }
      }
    })

//States para noticias individuales por seccion
      
  .state('app.singleNoticias', {
    url: '/noticias/article/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/article.html',
        controller: 'NoticiasSingleCtrl'
      }
    }
  })
  
  .state('app.singleDeportes', {
    
    url: '/deportes/article/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/article.html',
        controller: 'DeportesSingleCtrl'
      }
    }
  })
  
  .state('app.singleEconomia', {
    url: '/economia/article/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/article.html',
        controller: 'EconomiaSingleCtrl'
      }
    }
  })
  
  .state('app.singleComunidad', {
    url: '/comunidad/article/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/article.html',
        controller: 'ComunidadSingleCtrl'
      }
    }
  })
  
  .state('app.singleVida', {
    url: '/vida/article/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/article.html',
        controller: 'VidaSingleCtrl'
      }
    }
  })
  
  .state('app.singleSociales', {
    url: '/sociales/article/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/article.html',
        controller: 'SocialesSingleCtrl'
      }
    }
  })
  
  .state('app.singleParentesis', {
    url: '/parentesis/article/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/article.html',
        controller: 'ParentesisSingleCtrl'
      }
    }
  })
  
  .state('app.singleMinianuncios', {
    url: '/minianuncios/article/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/article.html',
        controller: 'MinianunciosSingleCtrl'
      }
    }
  });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/noticias');
});
