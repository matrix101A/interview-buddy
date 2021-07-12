import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import firebse from "../firebase";

function ReviewedItems() {
  const [question, setQuestion] = useState([]);
  const [id, setId] = useState(1);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    firebse.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        setUser(uid);
        fetch("https://interview-buddy.herokuapp.com/review", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user: user,
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
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
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
