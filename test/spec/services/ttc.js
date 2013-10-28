'use strict';

describe('Service: Ttc', function () {

  // load the service's module
  beforeEach(module('TtcangularApp'));

  // instantiate service
  var Ttc;
  beforeEach(inject(function (_Ttc_) {
    Ttc = _Ttc_;
  }));

  it('should do something', function () {
    expect(!!Ttc).toBe(true);
  });

});
