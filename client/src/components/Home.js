import React from "react";

function Home() {
  return (
    <div>
      <div class="card my-4">
        <div class="card-header">Practice for your upcoming interview</div>
        <div class="card-body">
          <h5 class="card-title">Practice Questions</h5>
          <p class="card-text">
            Want help in preparing for your upcoming interview , we have
            compiled a lot of question from geeks for geeks to help you prepare
            for your next interview , do check them out .
          </p>
          <a href="#/practice" class="btn btn-success">
            Practice Questions
          </a>
        </div>
      </div>
      <div class="card my-4">
        <div class="card-header">Practice for your upcoming interview</div>
        <div class="card-body">
          <h5 class="card-title">
            Revisit the question which you want anytime{" "}
          </h5>
          <p class="card-text">
            Stuck with a question ? Add it to review it later and revisit
            anytime and try to upsolve it , you can also check the solutions if
            you are stuck at any point . HAPPY SOLVING !
          </p>
          <a href="#/review" class="btn btn-info">
            See your review Questions
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
