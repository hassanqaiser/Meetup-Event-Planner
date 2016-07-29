'use strict';

describe('Controller: EventsControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('meetupEventsApp'));

  var EventsControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventsControllerCtrl = $controller('EventsControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventsControllerCtrl.awesomeThings.length).toBe(3);
  });
});
