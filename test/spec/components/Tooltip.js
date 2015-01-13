'use strict';

describe('Tooltip', function () {
  var Tooltip, component;

  beforeEach(function () {
    Tooltip = require('../../../src/scripts/components/Tooltip.jsx');
    component = Tooltip();
  });

  it('should create a new instance of Tooltip', function () {
    expect(component).toBeDefined();
  });
});
