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

Zone.getAllNames = (req: Request, res: Response, next: NextFunction) => {
    Zone.find({}, 'name zone_type continent', (err, zones) => {
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
    //console.log(req.params);
    var zoneName = `^${String(req.params.zoneName).replace('-', ' ')}$`;
    //console.log(`Zone Name: ${zoneName}\n`);
    Zone.findOne({
        name: {$regex: new RegExp(zoneName, "i")}
        }, 'maps', (err, zone) => {
        if (err) {
            res.status(err.status || 500);
            res.json({
            message: err.message,
            error: err
            });
        }
        else {
            var map = zone.maps.filter(map => map.name.toLowerCase() == String(req.params.mapName).toLowerCase())[0];
            //console.log(map);
            map = JSON.parse(map);
            res.status(200);
            res.json({
                message: "Record(s) received.",
                data: map
            });
        }
    });
}

Zone.getZonesByContinentName = (req: Request, res: Response, next: NextFunction) => {
    var continentName = `^${String(req.params.continentName).replace('-', ' ')}$`;
    Zone.find({continent: {$regex: new RegExp(continentName, "i")}}, 'name zone_type',
    (err, zones) => {
        if (err) {
            res.status(err.status || 500);
            res.json({
            message: err.message,
            error: err
            });
        }
        else {
            res.status(200);
            //console.log(zones);
            res.json({
               message: "Record(s) received.",
               data: zones
            });
        }       
    });
}



export default Zone;
