var continentController = require("../controllers/continentController");
var mapController = require("../controllers/mapController");
var zoneController = require("../controllers/zoneController");


import {notSupportedHandler} from './routeHandlers';



export class Routes {

    indexRoute(router) {
        router.route('/')
        .all((request, response, next) => {
            response.statusCode = 200;
            response.setHeader('Context-Type', 'text/plain');
            response.end();
        })
        
        .put(notSupportedHandler)
        .post(notSupportedHandler)
        .delete(notSupportedHandler);
        
        
    }

    continentRoute(router) {
        router.route("/:continentName")
        .all((req, res, next) => {
            res.status(200);
            next();
        })
        .get(continentController.getByName)
        .post(notSupportedHandler)
        .put(notSupportedHandler)
        .delete(notSupportedHandler);
    }

    mapRoute(router) {
        router.route("/:zoneName/:mapName")
        .all((req, res, next) => {
            res.status(200);
            next();
        })
        .get(mapController.getMapByName)
        .put(notSupportedHandler)
        .post(notSupportedHandler)
        .delete(notSupportedHandler);
    }

    zoneRoute(router) {
        router.route("/:zoneName")
        .all((req, res, next) => {
            res.status(200);
            next();
        })
        .get(zoneController.getByName)
        .post(notSupportedHandler)
        .put(notSupportedHandler)
        .delete(notSupportedHandler);

    }

    addRoutes(router) {
        this.indexRoute(router);
        this.zoneRoute(router);
        this.continentRoute(router);
        this.mapRoute(router);
    }
    
}