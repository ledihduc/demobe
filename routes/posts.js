var express = require("express");
var router = express.Router();
const sampleData = require("../sampleData");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(sampleData.textAssets);
});

module.exports = router;
