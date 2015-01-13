/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


require('../../styles/Scale.less');


var Scale = React.createClass({
    propTypes: {
        majorTicks: React.PropTypes.number, // number of major ticks overall
        minorTicks: React.PropTypes.number, // number of minor ticks per major tick
        majorTickHeight: React.PropTypes.number,
        minorTickHeight: React.PropTypes.number,
        color: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            majorTicks: 11,
            minorTicks: 1,
            majorTickHeight: 10,
            minorTickHeight: 5,
            color: '#D5DBE1'
        };
    },

    drawTick: function (x, minor) {
        // draw the line on whole pixels to avoid aliasing
        x = Math.round(x);
        this.context.fillRect(x, 0, 1, minor ? this.props.minorTickHeight : this.props.majorTickHeight);
    },

    drawTicks: function () {
        var canvas = this.canvas;
        var context = this.context;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = this.props.color;

        var spaceBetweenMajorTicks = (canvas.width - 1) / (this.props.majorTicks - 1),
            spaceBetweenMinorTicks = (spaceBetweenMajorTicks - 1) / (this.props.minorTicks + 1);

        // draw major ticks
        for (var i = 0; i < this.props.majorTicks; i++) {

            var tickX = i * spaceBetweenMajorTicks;

            this.drawTick(tickX);

            // for each major tick, draw some minor ticks
            for (var j = 1; j <= this.props.minorTicks; j++) {
                this.drawTick(tickX + (j * spaceBetweenMinorTicks), true);
            }
        }

    },

    componentDidMount: function() {
        var width = this.getDOMNode().offsetWidth;
        this.canvas = this.refs.canvas.getDOMNode();
        this.context = this.canvas.getContext('2d');
        this.drawTicks();
    },

  render: function () {

    var style = {
        width: this.props.width,
        height: 10
    };

    return (
        <canvas className="slider-scale" ref="canvas" style={style} width={this.props.width + 'px'} height="10px"></canvas>
      );
  }
});

module.exports = Scale;


