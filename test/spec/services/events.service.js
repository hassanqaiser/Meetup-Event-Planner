'use strict';

describe('Service: events.service', function () {

  // load the service's module
  beforeEach(module('meetupEventsApp'));

  // instantiate service
  var events.service;
  beforeEach(inject(function (_events.service_) {
    events.service = _events.service_;
  }));

  it('should do something', function () {
    expect(!!events.service).toBe(true);
  });

});
