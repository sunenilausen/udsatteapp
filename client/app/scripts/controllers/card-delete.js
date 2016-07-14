'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CardDeleteCtrl
 * @description
 * # CardDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CardDeleteCtrl', function (
  $scope,
  $routeParams,
  card,
  $location
) {
  $scope.card = card.one($routeParams.id).get().$object;
  $scope.deleteCard = function() {
    $scope.card.remove().then(function() {
      $location.path('/cards');
    });
  };
  $scope.back = function() {
    $location.path('/card/' + $routeParams.id);
  };
});
