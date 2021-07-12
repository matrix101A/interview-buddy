import React from "react";
import firebse from "../firebase";

function Layout() {
  const onClickSignOut = () => {
    firebse
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    // Navigation bar made using bootstrap
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">
              Interview Buddy
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/#/review">
                  Review Questions
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#/practice">
                  Practice Questions
                </a>
              </li>
              <li class="nav-item" onClick={onClickSignOut}>
                <a class="nav-link" href="/">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Layout;
