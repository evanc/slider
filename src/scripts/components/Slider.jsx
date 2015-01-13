/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');


require('../../styles/Slider.less');

var Channel = require('./Channel');
var Scale = require('./Scale');
var Labels = require('./Labels');
var Tooltip = require('./Tooltip');

var Slider = React.createClass({

    propTypes: {
        value: React.PropTypes.number,
        onChange: React.PropTypes.func,
        tooltipFormatter: React.PropTypes.func
    },

    getDefaultProps: function() {
        return {
            value: 0,
            onChange: function () {},
            tooltipFormatter: function (val) { return val; }
        };
    },

    getInitialState: function() {
        return {
            isDragging: false
        };
    },

    onDraggingChange: function (isDragging) {
        this.setState({
            isDragging: isDragging
        });
    },

    render: function () {
        return (
            <div className="slider-component">
                <Channel
                    width={this.props.width}
                    value={this.props.value}
                    onDraggingChange={this.onDraggingChange}
                    onChange={this.props.onChange} />
                <Scale width={this.props.width} />
                <Labels width={this.props.width} labels={['0%', '50%', '100%']} />
                <Tooltip width={this.props.width} value={this.props.value} formatter={this.props.tooltipFormatter} />
            </div>
        );
    }
});

module.exports = Slider;


