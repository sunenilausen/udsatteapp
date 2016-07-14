'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CardAddCtrl
 * @description
 * # CardAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CardAddCtrl', function ($scope, card, $location) {
    $scope.card = {};
    $scope.card.symptoms = [];
    $scope.card.actions = [];
    $scope.card.notices = [];

    $scope.saveCard = function() {
      card.post($scope.card).then(function() {
        $location.path('/cards');
      });
    };
  });
