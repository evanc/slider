/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var $j = require('jquery');

require('../../styles/Tooltip.less');


var Tooltip = React.createClass({
    propTypes: {
        value: React.PropTypes.number,
        width: React.PropTypes.number,
        formatter: React.PropTypes.func
    },

    getDefaultProps: function() {
        return {
            value: 0,
            width: 1
        };
    },

    positionTip: function () {
        var left = (this.props.width * this.props.value) - ($j(this.getDOMNode()).outerWidth() / 2);

        $j(this.getDOMNode()).css({
            left: left
        });
    },

    componentDidMount: function() {
        this.positionTip();
    },

    componentDidUpdate: function(prevProps, prevState) {
        this.positionTip();
    },

    render: function () {

        return (
            <div className="slider-tooltip">
                {this.props.formatter(this.props.value)}
            </div>
        );
    }
});

module.exports = Tooltip;


