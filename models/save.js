var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SaveSchema = new Schema({
    title: {
        type: String
    },
    date: {
        type: String
    },
    url: {
        type: String
    }
});

var Save = mongoose.model("Save", SaveSchema);
module.exports = Save;