angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  
})

.controller('noticiasCtrl', function($scope, Prensa) {
  $scope.playlists = Prensa.all('noticias');
})

.controller('deportesCtrl', function($scope, Prensa) {
  $scope.playlists = Prensa.all('deportes');
})

.controller('economiaCtrl', function($scope, Prensa) {
  $scope.playlists = Prensa.all('economia');
})

.controller('comunidadCtrl', function($scope, Prensa) {
  $scope.playlists = Prensa.all('comunidad');
})

.controller('vidaCtrl', function($scope, Prensa) {
  $scope.playlists = Prensa.all('vida');
})

.controller('socialesCtrl', function($scope, Prensa) {
  $scope.playlists = Prensa.all('sociales');
})

.controller('parentesisCtrl', function($scope, Prensa) {
  $scope.playlists = Prensa.all('parentesis');
})

.controller('minianunciosCtrl', function($scope, Prensa) {
  $scope.playlists = devuelveLiPrensa.allsta('minianuncios');
})



.controller('PlaylistCtrl', function($scope, $stateParams, Prensa) {
	$scope.playlists = Prensa.get($stateParams.playlistId);
	
});
