'use strict';

describe('Controller: FightCtrl', function () {

  // load the controller's module
  beforeEach(module('vkBandwagonApp'));

  var FightCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FightCtrl = $controller('FightCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FightCtrl.awesomeThings.length).toBe(3);
  });
});
