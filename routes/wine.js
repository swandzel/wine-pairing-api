const express = require("express");
const { getWine, postWine } = require("../controllers/wine.js");
const router = express.Router();

router.get("/getWine", getWine);
router.post("/postWine", postWine);

module.exports = router;
