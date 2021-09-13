const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const User_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

/* ---------------------------- Encrypt password ---------------------------- */
User_schema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});


/* --------------------------- Genreating a token --------------------------- */
User_schema.methods.generateAuthtoken = async function () {
    try {
        let signed_token = jwt.sign({ _id: this._id, email: this.email, mobile: this.mobile, properties: this.properties }, process.env.SECRET_KEY);
        return signed_token;
    } catch (err) {
    }
};

const User = mongoose.model('USER', User_schema);
module.exports = User;

