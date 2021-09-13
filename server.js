var cors = require('cors')
const cookieparser = require("cookie-parser");
const express = require('express')
const path = require('path');
const dotEnv = require("dotenv");

/* ----------------------- Enviournment configuration ----------------------- */
dotEnv.config({ path: path.join(__dirname + "/configuration.env") })

/* ------------------------ Set data base connection ------------------------ */
require(path.join(__dirname + "/express-essentials/DB/DB-Connection.js"));

/* ------------------------------- Declare app ------------------------------ */
const app = express();

/* ---------------------------------- Uses ---------------------------------- */
app.use(cors())
app.use(express.json())
app.use(cookieparser());

/* -------------------------------- API URLs -------------------------------- */
app.use(require(path.join(__dirname + "/express-essentials/API/authentication.js")));
app.use(require(path.join(__dirname + "/express-essentials/API/common.js")));

/* ------------------------------- Production ------------------------------- */
const PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname + '/dist')));
app.get('**', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

/* ------------------------------- Run server ------------------------------- */
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
