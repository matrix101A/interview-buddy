const Questions = require("../models/questions");
const Review = require("../models/reviewed");
const { connect } = require("../routes/Question");

exports.getQuestion = (req, res, next) => {
  console.log("dfsfsdf");
  const questionId = req.body.id;

  Questions.findByPk(questionId)
    .then((problem) => {
      res.json({ question: problem.question, solution: problem.solution });
    })
    .catch((e) => console.log(e));
};

exports.postReview = (req, res, next) => {
  Review.findAll()
    .then((review) => {
      res.json({ review: review });
    })
    .catch((e) => console.log(e));
};

exports.postAddProduct = (req, res, next) => {
  const question = req.body.question;
  const solution = req.body.solution;
  const difficulty = req.body.difficulty;
  Review.create({
    question: question,
    solution: solution,
    difficulty: difficulty,
  })
    .then((r) => {
      res.json({ message: "Added to you review questions" });
    })
    .catch((e) => console.log(e));
};
