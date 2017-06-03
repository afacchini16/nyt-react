var React = require('react');

var Results = require('./Results.js');

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


var Search = React.createClass({
    getInitialState: function() {
        return {
            topic: "",
            startDate: "",
            endDate:""
        }
    },

    handleChange: function(event) {
        this.setState({
            [event.target.name]: [event.target.value]
        });
        console.log("Search state:",this.state);
    },

    handleSubmit: function(event) {
        event.preventDefault();
        this.props.handleSubmit(this.state.topic, this.state.startDate, this.state.endDate);
    },


    render: function() {
        return (
            <div className = "row">
                <div className = "searchContainer" style = {searchContainer}>
                    <div className = "searchTitle panel-heading" style = {searchTitle}>
                        <h3 className = "panel-title">Search</h3>
                    </div>
                    <div className = "row text-center">
                        <div className = "searchBarTitle" style = {searchBarTitles}>
                            <h4>Topic</h4>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <input type = "text" name="topic" onChange={this.handleChange} value = {this.state.topic} className = "form-control" style = {searchBox}/> 
                            <div className = "searchBarTitle" style = {searchBarTitles}>
                                <h4>Start Year</h4>
                            </div>
                            <input type = "text" name="startDate" onChange={this.handleChange} value = {this.state.startDate} className = "form-control" style = {searchBox}/>
                            <div className = "searchBarTitle" style = {searchBarTitles}>
                                <h4>End Year</h4>
                            </div>
                            <input type = "text" name="endDate" value = {this.state.endDate} onChange={this.handleChange} className = "form-control" style = {searchBox}/>
                            <input type = "submit" className = "btn btn-lg" value = "Search" style = {btnStyle}/>
                        </form> 
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Search;