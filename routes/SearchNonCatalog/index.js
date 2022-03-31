const url = require("url");
const needle = require("needle");
const express = require("express");
const apicache = require("apicache");
const router = express.Router();

const BASE_URL = "https://search.roblox.com/catalog/json?CatalogContext=2&";

// Initialize cache
let cache = apicache.middleware;

router.get("/", cache("10 minutes"), async (req, res) => {
  try {
    let forwardParams = new url.URLSearchParams(url.parse(req.url, true).query);
    const forwardUrl = `${BASE_URL}${forwardParams}`;
    const apiRes = await needle("get", forwardUrl);
    const data = apiRes.body;

    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

module.exports = router;
