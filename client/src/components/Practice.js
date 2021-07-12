import React from "react";
import "./styles.css";
import firebse from "../firebase";

import { useState, useEffect } from "react";

function Practice() {
  const [question, setQuestion] = useState("");
  const [solution, setSolution] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [user, setUser] = useState("");

  const [id, setId] = useState(1);
  const [message, setMessage] = useState("");

  const onClickReview = () => {
    fetch("https://interview-buddy.herokuapp.com/add-review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question_id: id,
        question: question,
        solution: solution,
        difficulty: difficulty,
        user: user,
      }),
    })
      .then((result) => {
        result.json().then((res) => {
          console.log(res);
          setMessage(res.message);
        });
      })
      .catch((e) => console.log(e));
  };

  const onClickNext = () => {
    setMessage("");

    setId(id + 1);
  };
  useEffect(() => {
    firebse.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        setUser(uid);

        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    fetch("https://interview-buddy.herokuapp.com/question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => {
        console.log(res);
        res.json().then((res) => {
          setQuestion(res.question);
          setSolution(res.solution);
          setDifficulty(res.difficulty);
        });
      })
      .catch((e) => console.log(e));
  });
  return (
    <div>
      {message.length > 0 && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}

      <hr />

      <div className="row memorizePanel">
        <div className="col-xs-8 col-xs-offset-2">
          <div className="panel panel-default cardFront">
            <div className="panel-body">
              <div className="alignContainer">
                <div className="alignMiddle frontText">
                  <h3 className="text-center">{question}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-primary cardBack">
            <div className="panel-body">
              <div className="alignContainer">
                <div className="alignMiddle frontText"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-xs-12 text-center ">
          <a href={solution} target="_blank" className="btn btn-info  flipCard">
            <i className="fa fa-exchange"></i>
            View Solution
          </a>
          &nbsp; &nbsp;
          <button className="btn btn-success " onClick={onClickReview}>
            <i className="fa fa-check"></i>
            Add for review
          </button>
          &nbsp; &nbsp;
          <button className="btn btn-primary my-3 " onClick={onClickNext}>
            Next Question
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Practice;
