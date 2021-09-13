const express = require('express')
const router = express.Router();
require('../DB/DB-Connection/js');
const User = require('../DB/Models/User.js')
const bcrypt = require('bcryptjs')

/* -------------------------------------------------------------------------- */
/*                                  API URLS                                  */
/* -------------------------------------------------------------------------- */
/* -------------------------------- Register -------------------------------- */
router.post('/api/signup', async (req, res) => {
    console.log(req.body);
    try {
        // Check if all fields are filled or not
        const { name, email, password, mobile } = req.body;
        if (!name || !email || !password || !mobile) {
            return res.status(422).json({ err: "plz fill all the details" });
        }

        // Check whether user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(200).json({ msg: "email already exists" });
        }

        // Create new user
        const user = new User({ name, email, password, mobile });
        await user.save();

        // Create JWT token
        const token = await user.generateAuthtoken();
        return res.status(200).json({ msg: "success", token: token });
    } catch (err) {
        return res.status(500).json({ err: "failed" });
    }
})


/* ---------------------------------- Login --------------------------------- */
router.post('/api/login', async (req, res) => {
    try {
        // Check if all fields are filled or not
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ err: "plz fill all the details" });
        }

        // Find user in database
        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            // Match password 
            const isMatch = await bcrypt.compare(password, userLogin.password)

            // Generate Authentication JWT token
            if (isMatch) {
                const token = await userLogin.generateAuthtoken();
                return res.status(200).json({ msg: "success", token: token });
            } else {
                return res.status(200).json({ msg: "invalid credentials" });
            }
        } else {
            return res.status(200).json({ msg: "invalid credentials" });
        }
    } catch (err) {
        return res.status(500).json({ err: "failed" });
    }
})


/* -------------------------------------------------------------------------- */
/*                                   EXPORTS                                  */
/* -------------------------------------------------------------------------- */
module.exports = router;