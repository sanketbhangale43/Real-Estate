const express = require('express')
const router = express.Router();
require('../DB/DB-Connection/js');
const User = require('../DB/Models/User.js')
const VerifyToken = require('../Middleware/VerifyToken');

/* -------------------------------------------------------------------------- */
/*                                  API URLS                                  */
/* -------------------------------------------------------------------------- */
/* -------------------------------- Register -------------------------------- */
router.get('/api/verify-user', VerifyToken, async (req, res) => {
    try {
        return res.status(200).json({ msg: "success" });
    } catch (err) {
        return res.status(500).json({ msg: "failed" });
    }
});
/* -------------------------------------------------------------------------- */
/*                                   EXPORTS                                  */
/* -------------------------------------------------------------------------- */
module.exports = router;