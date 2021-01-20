import Layout from "./components/Layout";
import Practice from "./components/Practice";
import { createBrowserHistory } from "history";
import Home from "./components/Home";
import firebaseConfig from "./firebase";
import { useState, useEffect } from "react";
import firebase from "firebase";

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
    firebase.initializeApp(firebaseConfig);
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("signed in ");
      } else {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
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
