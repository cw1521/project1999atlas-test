var mongoose = require('mongoose');

var mapSchema = new mongoose.Schema({
    name: String,
    img_link: String,
    location_key: [String],
    comments: [String],
    continent: String,
    zone: String
});

var Map = mongoose.model("map", mapSchema);

export {Map};