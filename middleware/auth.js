const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {

    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({ msg: 'Authorization denied'})
    }

    try {
        const protected = jwt.verify(token, config.get('jwtSecret'));

        req.patient = protected.patient;
        next();

    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid'});
    }
}