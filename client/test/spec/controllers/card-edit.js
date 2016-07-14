'use strict';

describe('Controller: CardEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var CardEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CardEditCtrl = $controller('CardEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CardEditCtrl.awesomeThings.length).toBe(3);
  });
});
