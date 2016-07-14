'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CardViewCtrl
 * @description
 * # CardViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CardViewCtrl', function (
    $scope,
    $routeParams,
    card
  ) {
    $scope.viewCard = true;
    $scope.card = card.one($routeParams.id).get().$object;
  });
