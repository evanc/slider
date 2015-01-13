'use strict';

describe('Slider', function () {
  var Slider, component;

  beforeEach(function () {
    Slider = require('../../../src/scripts/components/Slider.jsx');
    component = Slider();
  });

  it('should create a new instance of Slider', function () {
    expect(component).toBeDefined();
  });
});
