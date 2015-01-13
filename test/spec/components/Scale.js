'use strict';

describe('Scale', function () {
  var Scale, component;

  beforeEach(function () {
    Scale = require('../../../src/scripts/components/Scale.jsx');
    component = Scale();
  });

  it('should create a new instance of Scale', function () {
    expect(component).toBeDefined();
  });
});
