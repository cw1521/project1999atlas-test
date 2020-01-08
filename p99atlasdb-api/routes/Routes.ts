import Continent from "../controllers/continentController";
import Zone from "../controllers/zoneController";
import {Request, Response, NextFunction, Router} from 'express';


var express = require('express');

function notSupportedHandler(req, res, next) {    
    res.status(403);
    res.json({
        message: "Not Supported."
    });
}

    let router = express.Router();


    router.route("/continent")
    .get(Continent.getAll)
    .post(notSupportedHandler)
    .put(notSupportedHandler)
    .delete(notSupportedHandler);

    router.route("/continent/:continentName")
    .get(Continent.getByName)
    .post(notSupportedHandler)
    .put(notSupportedHandler)
    .delete(notSupportedHandler);

    router.route("/maps/:zoneName/:mapId")
    .get(Zone.getMapById)
    .put(notSupportedHandler)
    .post(notSupportedHandler)
    .delete(notSupportedHandler);


    router.route("/zones/:zoneName")
    .get(Zone.getByName)
    .post(notSupportedHandler)
    .put(notSupportedHandler)
    .delete(notSupportedHandler);

    router.route("/zones")
    .get(Zone.getAllNames)
    .post(notSupportedHandler)
    .put(notSupportedHandler)
    .delete(notSupportedHandler);


    router.route("/zones/continent/:continentName/")
    .get(Zone.getZonesByContinentName)
    .post(notSupportedHandler)
    .put(notSupportedHandler)
    .delete(notSupportedHandler);

    export default router;







// export class Routes {

//     private indexRoute(router) {
//         router.route('/p99atlasdb-api')
//         .get((request, response, next) => {
//             response.statusCode = 200;
//             next();
//         })  
//         .put(notSupportedHandler)
//         .post(notSupportedHandler)
//         .delete(notSupportedHandler);
//     }

//     private continentRoute(router) {
//         router.route("/p99atlasdb-api/continent")
//         .get(Continent.getAll)
//         .post(notSupportedHandler)
//         .put(notSupportedHandler)
//         .delete(notSupportedHandler);

//         router.route("/p99atlasdb-api/continent/:continentName")
//         .get(Continent.getByName)
//         .post(notSupportedHandler)
//         .put(notSupportedHandler)
//         .delete(notSupportedHandler);
//     }

//     private mapRoute(router) {
//         router.route("/p99atlasdb-api/maps/:zoneName/:mapId")
//         .get(Zone.getMapById)
//         .put(notSupportedHandler)
//         .post(notSupportedHandler)
//         .delete(notSupportedHandler);
//     }

//     private zoneRoute(router) {

//         router.route("/p99atlasdb-api/zones/:zoneName")
//         .get(Zone.getByName)
//         .post(notSupportedHandler)
//         .put(notSupportedHandler)
//         .delete(notSupportedHandler);

//     }

//     private zonesRoute(router) {
//         router.route("/p99atlasdb-api/zones")
//         .get(Zone.getAllNames)
//         .post(notSupportedHandler)
//         .put(notSupportedHandler)
//         .delete(notSupportedHandler);

        
//         router.route("/p99atlasdb-api/zones/continent/:continentName/")
//         .get(Zone.getZonesByContinentName)
//         .post(notSupportedHandler)
//         .put(notSupportedHandler)
//         .delete(notSupportedHandler);
//     }

//     public addRoutes(app) : void {
//         var router = express.Router();
//         this.indexRoute(router);
//         this.zoneRoute(router);
//         this.continentRoute(router);
//         this.mapRoute(router);
//         this.zonesRoute(router);
//         app.use(router);
//     }
    
// }