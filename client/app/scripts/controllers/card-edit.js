'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CardEditCtrl
 * @description
 * # CardEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CardEditCtrl', function (
   $scope,
   $routeParams,
   card,
   $location
 ) {
   $scope.editCard = true;
   $scope.card = {};
   card.one($routeParams.id).get().then(function(newCard) {
     $scope.card = newCard;
     $scope.saveCard = function() {
       $scope.card.save().then(function() {
         $location.path('/card/' + $routeParams.id);
       });
     };
   });
 });
