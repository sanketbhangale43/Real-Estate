const jwt = require('jsonwebtoken')
const User = require('../DB/Models/User')

const VerifyToken = async (req, res, next) => {
    try {
        // Get token from request
        const token = req.headers["token"];
        console.log(token);

        // Verify token
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        // Find user with id received after verification
        const rootUser = await User.findOne({ _id: verifyToken._id });
        if (!rootUser) {
            res.status(401).send('Unauthorized');
        }

        // Put user id in request headers
        req.headers["_id"] = verifyToken._id;
        next();
    } catch (err) {
        res.status(401).send('Unauthorized');
    }
}

module.exports = VerifyToken