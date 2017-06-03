var React = require('react');
var ReactDOM = require('react-dom');

// Include main which will render all other children elements
var Main = require("../components/Main.js");

// Use ReactDOM package to render the main component
ReactDOM.render(<Main />,  document.getElementById("app"));