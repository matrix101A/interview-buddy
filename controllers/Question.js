const Questions = require("../models/questions");
const Reviewed = require("../models/reviewed");
const User = require("../models/users");

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
  const user_id = req.body.user.uid;
  console.log(user_id);

  User.findByPk(user_id).then((user) => {
    user.getReviewed().then((r) => {
      r.getQuestions().then((questions) => {
        res.json({ review: questions });
      });
    });
  });
  // Review.findAll()
  //   .then((review) => {
  //     res.json({ review: review });
  //   })
  //   .catch((e) => console.log(e));
};

exports.postAddReview = (req, res, next) => {
  const question_id = req.body.question_id;
  // const question = req.body.question;
  // const solution = req.body.solution;
  const user_id = req.body.user;
  User.findByPk(user_id).then((user) => {
    user.getReviewed().then((r) => {
      Questions.findByPk(question_id)
        .then((question) => {
          console.log(question);
          r.addQuestions(question);
          res.json({ message: "Added to you review questions" });
        })
        .catch((e) => res.json({ message: "error " + e }));
    });
  });

  // Review.create({
  //   question: question,
  //   solution: solution,
  //   difficulty: difficulty,
  // })
  //   .then((r) => {
  //     res.json({ message: "Added to you review questions" });
  //   })
  //   .catch((e) => console.log(e));
};

exports.loginUser = (req, res, next) => {
  const info = req.body.user;
  console.log(info.uid, info.displayName, info.email);
  User.create({
    id: info.uid,
    name: info.displayName,
    email: info.email,
  })
    .then((r) => {
      r.createReviewed().catch((e) => {
        res.json({ message: "user error in review " });
      });
      res.json({ message: "user" });
    })
    .catch((e) => res.json({ message: "user already exists" }));
};
