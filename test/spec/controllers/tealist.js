'use strict';

describe('Controller: TealistCtrl', function () {

  // load the controller's module
  beforeEach(module('cuppaApp'));

  var TealistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TealistCtrl = $controller('TealistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TealistCtrl.awesomeThings.length).toBe(3);
  });
});
