var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var Save = require('./models/save.js');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

mongoose.connect("mongod://127.0.0.1:27017");
var db = mongoose.connection;

db.on("error", function(error){
    console.log("Mongoose Error connecting to DB: " + error);
});
db.once("open", function(){
    console.log("Success connecting to Mongoose DB");
});

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/public/index.html");
});

// Need to use express to handle and add routes and all the DB handling stuff here:
app.post("/api/saved/", function(request, response){
    console.log("BODY: " + request.body);
});

app.listen(PORT, function() {
    console.log("App listening on port : " + PORT);
});