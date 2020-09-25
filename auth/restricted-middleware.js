const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets')

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(token){
        next();
    } else if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
            if(err){
                res.status(401).json({
                    message: "Credentials are not valid"
                })
            } else {
                req.decodeToken = decodeToken;
                next();
            }
        })
    }
}