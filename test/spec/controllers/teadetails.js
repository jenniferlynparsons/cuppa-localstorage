'use strict';

describe('Controller: TeadetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('cuppaApp'));

  var TeadetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeadetailsCtrl = $controller('TeadetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeadetailsCtrl.awesomeThings.length).toBe(3);
  });
});
