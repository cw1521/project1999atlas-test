import mongoose, {Schema} from 'mongoose';

var ContinentsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    img_link: String
}, {collection: "continents"});


var Continent = mongoose.model('continents', ContinentsSchema);

export {Continent};