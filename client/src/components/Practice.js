import React from "react";
import "./styles.css";

import { useState, useEffect } from "react";

function Practice() {
  const [question, setQuestion] = useState("");
  const [solution, setSolution] = useState("");
  const [id, setId] = useState(1);

  const onClickNext = () => {
    setId(id + 1);
  };
  useEffect(() => {
    console.log("woeking ");
    fetch("http://localhost:5000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => {
        console.log(
          res.json().then((res) => {
            setQuestion(res.question);
            setSolution(res.solution);
          })
        );
      })
      .catch((e) => console.log(e));
  });
  return (
    <div>
      <hr />

      <div classNameName="row memorizePanel">
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
          <a
            href={solution}
            target="_blank"
            className="btn btn-primary  flipCard"
          >
            <i className="fa fa-exchange"></i>
            View Solution
          </a>
          &nbsp; &nbsp;
          <a href="" className="btn btn-success ">
            <i className="fa fa-check"></i>
            Add for review
          </a>
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
