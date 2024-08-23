const express = require("express");
const router = express.Router();

/* GET home pageEee. */
router.get("/", (req, res, next) => {
	res.render("index", { title: "Expresss" });
});

module.exports = router;
