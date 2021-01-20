const Questions = require("../models/questions");

exports.getQuestion = (req, res, next) => {
  const questionId = req.body.id;

  Questions.findByPk(questionId)
    .then((problem) => {
      res.json({ question: problem.question, solution: problem.solution });
    })
    .catch((e) => console.log(e));
};
