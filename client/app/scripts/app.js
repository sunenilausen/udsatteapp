'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular',
    'ngMaterial'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        //controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        //controllerAs: 'about'
      })
      .when('/cards', {
        templateUrl: 'views/cards.html',
        controller: 'CardsCtrl'
      })
      .when('/create/card', {
        templateUrl: 'views/card-add.html',
        controller: 'CardAddCtrl',
      })
      .when('/card/:id', {
        templateUrl: 'views/card-view.html',
        controller: 'CardViewCtrl',
      })
      .when('/card/:id/delete', {
        templateUrl: 'views/card-delete.html',
        controller: 'CardDeleteCtrl',
      })
      .when('/card/:id/edit', {
        templateUrl: 'views/card-edit.html',
        controller: 'CardEditCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('cardRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('card', function(cardRestangular) {
    return cardRestangular.service('card');
  });
