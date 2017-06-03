// Main is the parent element, with the children being Search.js, Results.js, and Save.js
var React = require('react');

var Search = require('./Search.js');


var helpers = require('../helpers/helpers.js');

const jumbotron = {
        backgroundColor: 'rgb(50, 50, 220)',
        color: 'white',
    }
    const glyphicon = {
        fontSize: '400%',
        float: 'left',
        position: 'relative',
        left:'22%',
    }
    const title = {
       marginTop: '-1%',
       textAlign: 'center'
    }
    const h3 = {
        textAlign: 'center',
    }
    const searchTitle = {
        textAlign: 'center',
        backgroundColor: 'rgb(100, 120, 190)',
        // marginBottom: '1%',
        margin: '1% 0 1% 0',

    }
    const searchContainer = {
        // backgroundColor: 'rgb(100, 120, 190)'
        marginBottom: '2%',
        backgroundColor:'rgb(230, 230, 230)'
    }
    const searchBarTitles = {
        textAlign: 'center',
        marginBottom: '1%',
    }
    const searchBox = {
        marginLeft: '5%',
        marginRight: '5%',
        width: '90%',
    }
    const btnStyle = {
        marginTop: '1%',
    }

var Main = React.createClass({
    
    getInitialState: function() {
        return {
           topic: "",
           startDate: "",
           endDate: "",
           results: [],
           savedArticles: []
        };
    },

    componentDidMount: function() {
        helpers.getHistory().then(function(data){
            console.log("data: " + data);
            if (data !== this.state.savedArticles){
                this.setState({
                    savedArticles: data
                });
            }
        }.bind(this));
    },

    componentDidUpdate: function() {
        helpers.runQuery(this.state.topic, this.state.startDate, this.state.endDate).then(function(data){
            console.log("data: " + data);
            this.setState({
                results: data
                });
            }.bind(this));
    },

    handleSubmit: function(topic, startDate, endDate) {
        
        this.setState({
            topic:topic,
            startDate: startDate,
            endDate: endDate
        })
        this.componentDidUpdate();
    },
    
    render: function(){
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "jumbotron" style = {jumbotron}>
                        <div className = "glyphicon glyphicon-list-alt" style = {glyphicon}>
                            <h1 style = {title}> New York Times </h1>
                            <h3 style = {h3}>Search for and annotate articles of interest</h3>
                        </div>
                    </div>
                </div>
                <Search handleSubmit={this.handleSubmit} />
                <div className = "row">
                    <div className = "resultsTitle panel-heading" style = {searchTitle}>
                        <h3 className = "panel-title">Results</h3>
                        <div className = "resultsContent"></div>
                    </div>
                </div>
            </div>
        )
    }
});

// Export Main for use in other files
module.exports = Main;