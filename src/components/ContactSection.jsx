import React from "react";

const Contact = () => {
  return (
    <div className="Contact">
      <p className="contactHeading">CONTACT US </p>
      <div class="formgroup">
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Enter Your Name" />
      </div>
      <div class="formgroup">
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Enter Your email" />
      </div>
      <div class="formgroup">
        <label for="phone">Phone Number:</label>
        <input type="number" id="phone" placeholder="Enter Your Phone No." />
      </div>
      <div class="formgroup">
        <label for="add">Address:</label>
        <input type="text" id="add" placeholder="Enter Your Address" />
      </div>
    </div>
  );
};
export default Contact;
