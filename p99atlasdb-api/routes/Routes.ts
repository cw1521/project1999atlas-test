import Continent from "../controllers/continentController";
import Zone from "../controllers/zoneController";

function notSupportedHandler(req, res, next) {    
    res.status(403);
    res.json({
        message: "Not Supported."
    });
}


export class Routes {

    private indexRoute(router) {
        router.route('/p99atlasdb-api')
        .get((request, response, next) => {
            response.statusCode = 200;
            next();
        })  
        .put(notSupportedHandler)
        .post(notSupportedHandler)
        .delete(notSupportedHandler);
    }

    private continentRoute(router) {
        router.route("/p99atlasdb-api/continent")
        .get(Continent.getAll)
        .post(notSupportedHandler)
        .put(notSupportedHandler)
        .delete(notSupportedHandler);

        router.route("/p99atlasdb-api/continent/:continentName")
        .get(Continent.getByName)
        .post(notSupportedHandler)
        .put(notSupportedHandler)
        .delete(notSupportedHandler);
    }

    private mapRoute(router) {
        router.route("/p99atlasdb-api/maps/:zoneName/:mapName")
        .get(Zone.getMapByName)
        .put(notSupportedHandler)
        .post(notSupportedHandler)
        .delete(notSupportedHandler);
    }

    private zoneRoute(router) {
        router.route("/p99atlasdb-api/zones")
        .get(Zone.getAll)
        .post(notSupportedHandler)
        .put(notSupportedHandler)
        .delete(notSupportedHandler);

        router.route("/p99atlasdb-api/zones/:zoneName")
        .get(Zone.getByName)
        .post(notSupportedHandler)
        .put(notSupportedHandler)
        .delete(notSupportedHandler);

    }

    public addRoutes(router) : void {
        this.indexRoute(router);
        this.zoneRoute(router);
        this.continentRoute(router);
        this.mapRoute(router);
    }
    
}