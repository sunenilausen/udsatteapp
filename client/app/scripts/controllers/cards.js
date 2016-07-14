'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CardsCtrl
 * @description
 * # CardsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CardsCtrl', function ($scope, card) {
    $scope.cards = card.getList().$object;
  });
