'use strict';

describe('Channel', function () {
  var Channel, component;

  beforeEach(function () {
    Channel = require('../../../src/scripts/components/Channel.jsx');
    component = Channel();
  });

  it('should create a new instance of Channel', function () {
    expect(component).toBeDefined();
  });
});
