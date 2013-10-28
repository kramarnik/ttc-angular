'use strict';

describe('Service: Ttc', function () {

  // load the service's module
  beforeEach(module('ttcAngularApp'));

  // instantiate service
  var Ttc;
  beforeEach(inject(function (TtcService) {
    Ttc = TtcService;
  }));

  it('should do something', function () {
    expect(!!Ttc).toBe(true);
  });

});
