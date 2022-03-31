const url = require("url");
const needle = require("needle");
const express = require("express");
const apicache = require("apicache");
const router = express.Router();

let cache = apicache.middleware;

router.use("/searchcatalog", require("./SearchCatalog"));
router.use("/searchnoncatalog", require("./SearchNonCatalog"));

module.exports = router;
