import React from "react";

function Card(props) {
  return (
    <div>
      <div class="card text-center my-4">
        <div class="card-body">
          <p class="card-text">{props.question}</p>
          <a href={props.solution} target="_blank" class="btn btn-info">
            See Solution
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
