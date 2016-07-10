'use strict';

describe('Controller: TeanewCtrl', function () {

  // load the controller's module
  beforeEach(module('cuppaApp'));

  var TeanewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeanewCtrl = $controller('TeanewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeanewCtrl.awesomeThings.length).toBe(3);
  });
});
