'use strict';

describe('Controller: CardViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CardViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CardViewCtrl = $controller('CardViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CardViewCtrl.awesomeThings.length).toBe(3);
  });
});
