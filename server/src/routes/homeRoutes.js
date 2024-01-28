const express = require("express");
const router = express.Router();
const {days} = require("../controllers/home");

router.route("/home")
    .post(days);

module.exports = router;