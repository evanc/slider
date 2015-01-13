/** @jsx React.DOM */

var SliderApp = require('./SliderApp');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

var Slider = require('./Slider');

var formatter = function (val) {
    return Math.round(val * 100) + "%";
};

var SliderTest = React.createClass({
    getInitialState: function() {
        return {
            value: 0
        };
    },

    slide: function (newValue) {
        this.setState({
            value: newValue
        });
    },

    render: function () {

        return (<div>
            <Slider width={500} value={this.state.value} onChange={this.slide} tooltipFormatter={formatter} />
        </div>);

    }
});

React.renderComponent((
    <SliderTest />
), document.getElementById('content'));
