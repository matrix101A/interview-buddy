const express = require("express");
const router = express.Router();

const questionController = require("../controllers/Question");

router.post("/", questionController.getQuestion);

module.exports = router;
