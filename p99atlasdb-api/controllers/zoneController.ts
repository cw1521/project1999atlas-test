import {Zone} from '../models/zone';



Zone.getByName = (req, res) => {
    var zoneName = `^${String(req.params.zoneName)}$`;
    Zone.findOne({
        name: {$regex: new RegExp(zoneName, "i")}
        }, (err, zone) => {
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
                data: zone
            });
        }
    });

}

Zone.getAll = (req, res) => {
    Zone.find({}, (err, zones) => {
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
               data: zones
            });
        }       
    });
}
