'use strict';

describe('Main', function () {
  var SliderApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SliderApp = require('../../../src/scripts/components/SliderApp.jsx');
    component = SliderApp();
  });

  it('should create a new instance of SliderApp', function () {
    expect(component).toBeDefined();
  });
});
