const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.render("index", { title: "Grocery Inv." });
});

module.exports = router;