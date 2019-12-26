import {Zone} from '../models/zone';

import { Request, Response, NextFunction } from 'express';


Zone.getByName = (req: Request, res: Response, next: NextFunction) => {
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

Zone.getAll = (req: Request, res: Response, next: NextFunction) => {
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


Zone.getMapByName  = (req: Request, res, Response, next: NextFunction) => {
    var zoneName = `^${String(req.params.zoneName).replace('-', ' ')}$`;
    //console.log(`Zone Name: ${zoneName}\n`);
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
            var map = zone.maps.filter(map => map.name.toLowerCase() == String(req.params.mapName).toLowerCase())[0];
            map = JSON.stringify(map);
            res.status(200);
            res.json({
                message: "Record(s) received.",
                data: map
            });
        }
    });
}


export default Zone;
