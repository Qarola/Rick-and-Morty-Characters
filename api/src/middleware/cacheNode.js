const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 3600})

module.exports = {

    verifyCacheChars(req, res, next) {
        try {
            let { name } = req.query;
            if(cache.has(name)) {
                return res.status(200).json(cache.get(name))
            }
            return next();
        }
        catch(err) {
            throw new Error(err)
        }
    },

    verifyCacheByStatus(req, res, next) {
        try {
            let { status } = req.query;
            if(cache.has(status)) {
                return res.status(200).json(cache.get(status))
            }
            return next();
        }
        catch(err) {
            throw new Error(err)
        }
    },

    verifyCacheByGender(req, res, next) {
        try {
            let { gender } = req.query;
            if(cache.has(gender)) {
                return res.status(200).json(cache.get(gender))
            }
            return next();
        }
        catch(err) {
            throw new Error(err)
        }
    },

}




