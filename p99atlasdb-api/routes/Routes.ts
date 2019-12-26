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
        router.route('/')
        .all((request, response, next) => {
            response.statusCode = 200;
            next();
        })
        
        
        .put(notSupportedHandler)
        .post(notSupportedHandler)
        .delete(notSupportedHandler);
        
        
    }

    private continentRoute(router) {
        router.route("/continent/:continentName")
        .get(Continent.getByName)
        .post(notSupportedHandler)
        .put(notSupportedHandler)
        .delete(notSupportedHandler);
    }

    private mapRoute(router) {
        router.route("/maps/:zoneName/:mapName")
        .get(Zone.getMapByName)
        .put(notSupportedHandler)
        .post(notSupportedHandler)
        .delete(notSupportedHandler);
    }

    private zoneRoute(router) {
        router.route("/zones")
        .get(Zone.getAll())
        .post(notSupportedHandler)
        .put(notSupportedHandler)
        .delete(notSupportedHandler);

        router.route("/zones/:zoneName")
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