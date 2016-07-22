'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:CardSearchCtrl
 * @description
 * # CardSearchCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CardSearchCtrl', function ($scope, card, lodash) {

    /**
     * Search for symptoms
     */
    $scope.querySearch = function (criteria) {
      return criteria ? $scope.allSymptoms.filter(createFilterFor(criteria)) : [];
    };

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(symptom) {
        return (symptom._lowername.indexOf(lowercaseQuery) !== -1);
      };
    }

    $scope.loadSymptoms = function(cards) {

      var symptoms = [];
      for (var i in cards){
        symptoms = symptoms.concat(cards[i].symptoms);
        console.log(cards[i].symptoms[0]);
      }
      var symptoms = [
        'Blå mærker', 'Sår', 'Græder', 'Fraværende', 'Træt', 'Følsom', 'Vred', 'Hyperaktiv', 'Sart'
      ];
      symptoms = lodash.uniq(symptoms);

      return symptoms.map(function (c) {
        var symptom = {
          name: c,
          };
        symptom._lowername = symptom.name.toLowerCase();
        return symptom;
      });
    };



    $scope.search = function (cards, searchedSymptoms) {
      /**
       * Scores each card based on the f1score which determines a kind of relevancy based on the search parameters and actual symptoms of the card.
       * https://en.wikipedia.org/wiki/F1_score
       */
      function f1score(symptoms,s){
        if (s[0] === 'undefined') {s.pop(); }
        var tp = 0;
        for (var p in s){
          for (var i in symptoms){
            if (s[p].name === symptoms[i]){
              tp += 1;
              console.log('match');
            }
          }
        }
        var fn = s.length - tp;
        var fp = symptoms.length - tp;
        var precision = tp / (tp + fp);
        var recall = tp / (tp + fn);
        if (tp === 0) { return 0; }
        else { return 2 * ((precision * recall)/(precision + recall)); }
      }

      /**
      *A comparator function which compares the first element of two arrays, in our case the score
      */
      function Comparator(a, b) {
        if (a[0] < b[0]) { return 1; }
        if (a[0] > b[0]) { return -1; }
        return 0;
      }

      var scoredCards = [];
      for (var i in cards){
        try {
          scoredCards.push([f1score(cards[i].symptoms,searchedSymptoms), cards[i]]);
        }
        catch(err){
          console.log(err);
        }
      }
      var orderedCards = scoredCards.sort(Comparator);
      //return orderedCards;
      $scope.searchedCards = orderedCards;

    };
    $scope.cards = card.getList().$object;
    $scope.allSymptoms = $scope.loadSymptoms();
    $scope.symptoms = [$scope.allSymptoms[0]];
    $scope.searchedSymptoms = [];
    //$scope.searchedCards = $scope.search($scope.cards,$scope.symptoms);

  });
