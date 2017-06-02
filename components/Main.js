// Main is the parent element, with the children being Search.js, Results.js, and Save.js

var React = require('react');

var Search = require('./Results.js');
var Results = require('./Search.js');

var helpers = require('../helpers/helpers.js');

var Main = React.createClass({
    
    getInitialState: function() {
        return{
            title: "",
            date: "",
            url: "",
        };
    },

    componentDidMount: function() {

    },

    componentDidUpdate: function() {

    },

    handleClick: function() {

    },

    render: function(){
    return (
            <div className = "container">
                <div className = "row">
                    <div class = "jumbotron">
                        <div className = "glyphicon glyphicon-list-alt">
                            <h1>New York Times </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

// Export Main for use in other files
module.exports = Main;