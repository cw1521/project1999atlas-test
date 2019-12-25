import {Continent} from '../models/continent';




// Get Continent By Name
Continent.getByName = (req, res) => {
    var continentName = `^${String(req.params.continentName)}$`;
    Continent.findOne({
        name: {$regex: new RegExp(continentName, "i")}
    }, (err, continents) => {
        if (err) {
            res.status(err.status || 500);
            res.json({
            message: err.message,
            error: err
            });
        }
        else {
            res.status(200);
            res.json({
               message: "Record(s) received.",
               data: continents
            });
        }       
    });
}        
 


Continent.getAll = (req, res) => {
    Continent.find({}, (err, continents) => {
        if (err) {
            res.status(err.status || 500);
            res.json({
            message: err.message,
            error: err
            });
        }
        else {
            res.status(200);
            res.json({
               message: "Record(s) received.",
               data: continents
            });
        }       
    });
}

