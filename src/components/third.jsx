import React from "react";

const Third = () => {
  return (
    <div className="third">
      <div className="innerThird">
        <div className="box">
          <i class="fa-solid fa-truck icon"></i>
          <div>
            <p className="lineOneThird">Free Shipping From</p>
            <p className="lineTwoThird">All Orders over $50</p>
          </div>
        </div>
        <div className="box">
          <i class="fa-solid fa-calendar-days icon"></i>
          <div>
            <p className="lineOneThird">Money Back Guarantee</p>
            <p className="lineTwoThird">100% Money Back Guarantee</p>
          </div>
        </div>
        <div className="box">
          <i class="fa-solid fa-money-bill icon"></i>
          <div>
            <p className="lineOneThird">Cash On Delivery</p>
            <p className="lineTwoThird">COD is available</p>
          </div>
        </div>
        <div className="box">
          <i class="fa-solid fa-phone-volume icon"></i>
          <div>
            <p className="lineOneThird">Help & Support</p>
            <p className="lineTwoThird">Call us at +012245670</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Third;
