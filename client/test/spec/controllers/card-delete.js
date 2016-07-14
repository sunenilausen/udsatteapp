'use strict';

describe('Controller: CardDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CardDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CardDeleteCtrl = $controller('CardDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CardDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
