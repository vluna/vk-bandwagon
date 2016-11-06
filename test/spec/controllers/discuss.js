'use strict';

describe('Controller: DiscussCtrl', function () {

  // load the controller's module
  beforeEach(module('vkBandwagonApp'));

  var DiscussCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiscussCtrl = $controller('DiscussCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DiscussCtrl.awesomeThings.length).toBe(3);
  });
});
