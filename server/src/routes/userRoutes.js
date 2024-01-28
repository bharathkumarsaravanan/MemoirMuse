const express = require("express");
const router = express.Router();
const {userAuth} = require("../controllers/auth");

router.route("/auth")
    .post(userAuth)
    .get(userAuth)

module.exports = router;