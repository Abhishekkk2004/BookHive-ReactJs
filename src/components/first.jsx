import React from "react";

const First = (props) => {
  console.log();
  return (
    <div className="first">
      <div className="inputBox">
        <input
          type="text"
          placeholder="Search for a book"
          className="inputFirst"
        />
        <i class="fa-solid fa-magnifying-glass search"></i>
      </div>
      <p id="logo">BookHive</p>
      <div className="cart">
        <div>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="cartCount">{props.value}</div>
        <div id="cartName">MY CART</div>
      </div>
    </div>
  );
};
export default First;
