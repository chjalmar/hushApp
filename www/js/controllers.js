angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  
})

.controller('noticiasCtrl', function($scope, PrensaNoticias) {
  $scope.playlists = PrensaNoticias.all('noticias');
})

.controller('deportesCtrl', function($scope, PrensaDeportes) {
  $scope.playlists = PrensaDeportes.all('deportes');
})

.controller('economiaCtrl', function($scope, PrensaEconomia) {
  $scope.playlists = PrensaEconomia.all('economia');
})

.controller('comunidadCtrl', function($scope, PrensaComunidad) {
  $scope.playlists = PrensaComunidad.all('comunidad');
})

.controller('vidaCtrl', function($scope, PrensaVida) {
  $scope.playlists = PrensaVida.all('vida');
})

.controller('socialesCtrl', function($scope, PrensaSociales) {
  $scope.playlists = PrensaSociales.all('sociales');
})

.controller('parentesisCtrl', function($scope, PrensaParentesis) {
  $scope.playlists = PrensaParentesis.all('parentesis');
})

.controller('minianunciosCtrl', function($scope, PrensaMinianuncios) {
  $scope.playlists = PrensaMinianuncios.all('minianuncios');
})

//Controladores por artículo por seccion

.controller('NoticiasSingleCtrl', function($scope, $stateParams, PrensaNoticias) {
	$scope.playlists = PrensaNoticias.get($stateParams.playlistId);
})

.controller('DeportesSingleCtrl', function($scope, $stateParams, PrensaDeportes) {
	$scope.playlists = PrensaDeportes.get($stateParams.playlistId);
})

.controller('EconomiaSingleCtrl', function($scope, $stateParams, PrensaEconomia) {
	$scope.playlists = PrensaEconomia.get($stateParams.playlistId);
	
})

.controller('ComunidadSingleCtrl', function($scope, $stateParams, PrensaComunidad) {
	$scope.playlists = PrensaComunidad.get($stateParams.playlistId);
	
})

.controller('VidaSingleCtrl', function($scope, $stateParams, PrensaVida) {
	$scope.playlists = PrensaVida.get($stateParams.playlistId);
	
})

.controller('SocialesSingleCtrl', function($scope, $stateParams, PrensaSociales) {
	$scope.playlists = PrensaSociales.get($stateParams.playlistId);
	
})

.controller('ParentesisSingleCtrl', function($scope, $stateParams, PrensaParentesis) {
	$scope.playlists = PrensaParentesis.get($stateParams.playlistId);
	
})

.controller('MinianunciosSingleCtrl', function($scope, $stateParams, PrensaMinianuncios) {
	$scope.playlists = PrensaMinianuncios.get($stateParams.playlistId);
	
});
