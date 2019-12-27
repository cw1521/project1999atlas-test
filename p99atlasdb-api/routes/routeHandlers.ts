exports.notSupportedHandler = (req, res, next) => {    
    res.status(403);
    res.json({
        message: "Not Supported."
    });
}


