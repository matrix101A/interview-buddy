import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
function ReviewedItems() {
  const [question, setQuestion] = useState([]);
  const [id, setId] = useState(1);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://interview-buddy.herokuapp.com/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => {
        res.json().then((r) => {
          setQuestion(r.review);
          console.log(question);
        });
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {question.length == 0 && (
        <div className="alert alert-success" role="alert">
          There are no Questions for you to review
        </div>
      )}
      {question.map((ques) => {
        return <Card question={ques.question} solution={ques.solution} />;
      })}
    </div>
  );
}

export default ReviewedItems;
