/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var $j = require('jquery');

require('../../styles/Labels.less');

var Labels = React.createClass({
    propTypes: {
        labels: React.PropTypes.arrayOf(React.PropTypes.string)
    },

    componentDidMount: function() {
        var labelElements = $j(this.getDOMNode()).find('div'),
            width = $j(this.getDOMNode()).width();

        labelElements.each(function (i, el) {
            var $el = $j(el),
                elWidth = $el.outerWidth(),
                labelSpacing = width / (labelElements.length - 1);

            var left = (labelSpacing * i) - (elWidth / 2);

            // make sure no labels go outside of the slider area
            left = Math.max(left, 0);
            left = Math.min(left, width - elWidth);

            $el.css({
                left: left
            });
        });
    },

    render: function () {

        var labels = this.props.labels.map(function (labelText) {
            return <div>{labelText}</div>;
        });

        var style = {
            width: this.props.width
        };

        return (
            <div className="slider-labels" style={style}>
                {labels}
            </div>
        );
    }
});

module.exports = Labels;


