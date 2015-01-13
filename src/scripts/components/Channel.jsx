/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var $j = require('jquery');

var _ = require('lodash');

require('../../styles/Channel.less');




var Channel = React.createClass({

    propTypes: {
        onChange: React.PropTypes.func,
        value: React.PropTypes.number,
        width: React.PropTypes.number
    },

    getDefaultProps: function() {
        return {
            onDraggingChange: function () {},
            width: 500,
            thumbDiameter: 9
        };
    },

    getInitialState: function() {
        return {
            thumbPosition: 0
        };
    },

    layerX: function (pageX) {
        return pageX - $j(this.getDOMNode()).offset().left;
    },

    mouseDown: function (e) {
        // add document listeners
        document.addEventListener('mousemove', this.mouseMove);
        document.addEventListener('mouseup', this.mouseUp);

        this.props.onDraggingChange(true);

        this.valueChange(this.layerX(e.pageX));

        // no need to propagate the event
        e.stopPropagation();
    },

    mouseUp: function (e) {
        document.removeEventListener('mousemove', this.mouseMove);
        document.removeEventListener('mouseup', this.mouseUp);

        this.props.onDraggingChange(false);
    },

    mouseMove: function (e) {
        this.valueChange(this.layerX(e.pageX));
    },

    // got a new x position, change the value to x/width
    valueChange: _.throttle(function (x) {
        var newValue = x / this.props.width;

        // constrain to [0, 1]
        newValue = Math.max(newValue, 0);
        newValue = Math.min(newValue, 1);

        try {
            this.props.onChange(newValue);
        } catch (exception) {}
    }, 25),

    thumbPosition: function () {
        var translatedLeft = this.props.width * this.props.value;
        return translatedLeft - (this.props.thumbDiameter / 2);
    },

    render: function () {

    var channelStyle = {
        width: this.props.width
    };

    var thumbStyle = {
        width: this.props.thumbDiameter,
        left: this.thumbPosition()
    };

    return (
        <div className="slider-channel" style={channelStyle} onMouseDown={this.mouseDown}>
            <div className="slider-thumb" ref="thumb" style={thumbStyle} />
        </div>
      );
    }
});

module.exports = Channel;


