import Layout from "./components/Layout";
import Practice from "./components/Practice";
import { createBrowserHistory } from "history";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import firebase from "./firebase";

import "firebase/auth";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import ReviewedItems from "./components/ReviewedItems";

function App() {
  useEffect(() => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        fetch("https://interview-buddy.herokuapp.com/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user: user,
          }),
        })
          .then((res) => {
            console.log(res);
            res.json().then((res) => {
              console.log(res.message);
            });
          })
          .catch((e) => console.log(e));

        console.log("signed in ");
      } else {
        firebase.auth().signInWithRedirect(provider);

        firebase
          .auth()
          .getRedirectResult()
          .then((result) => {
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          })

          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      }
    });
  });
  return (
    <div className="container">
      <HashRouter basename="/" history={createBrowserHistory()}>
        <Layout />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/practice" component={Practice} />
          <Route exact path="/review" component={ReviewedItems} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
