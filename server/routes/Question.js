const express = require("express");
const router = express.Router();

const questionController = require("../controllers/Question");

router.post("/question", questionController.getQuestion);
router.post("/review", questionController.postReview);
router.post("/add-review", questionController.postAddProduct);
module.exports = router;
