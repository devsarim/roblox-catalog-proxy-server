const url = require("url");
const needle = require("needle");
const express = require("express");
const apicache = require("apicache");
const router = express.Router();

const BASE_URL = "https://catalog.roblox.com/v1/search/items/details?";
const PAGE_LIMIT = 10;

// Initialize cache
let cache = apicache.middleware;

router.get("/", cache("10 minutes"), async (req, res) => {
  try {
    let forwardParams = new url.URLSearchParams(url.parse(req.url, true).query);

    let nextPageCursor = "";
    let pages = 0;
    let finalData = [];

    do {
      const forwardUrl = `${BASE_URL}${forwardParams}${
        nextPageCursor !== "" ? "&Cursor=" + nextPageCursor : ""
      }`;

      const apiRes = await needle("get", forwardUrl);
      const data = apiRes.body;

      nextPageCursor = data.nextPageCursor || "";

      finalData.push(data);
      pages++;
      console.log(pages);
    } while (nextPageCursor != "" && pages < PAGE_LIMIT);

    res.status(200).json(finalData);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

module.exports = router;
