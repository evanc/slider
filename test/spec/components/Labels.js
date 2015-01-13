'use strict';

describe('Labels', function () {
  var Labels, component;

  beforeEach(function () {
    Labels = require('../../../src/scripts/components/Labels.jsx');
    component = Labels();
  });

  it('should create a new instance of Labels', function () {
    expect(component).toBeDefined();
  });
});
