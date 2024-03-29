import React from "react";

const Card = (props) => {
  return (
    <div className="card1">
      <div className="img">
        <img src={props.link} alt="" />
      </div>
      <p id="cardTitle">{props.title}</p>
      <p id="cardAuthor">{props.author}</p>
      <p id="Prize">{props.prize}</p>
      <button className="button2" onClick={props.function}>
        {props.check ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};
export default Card;
