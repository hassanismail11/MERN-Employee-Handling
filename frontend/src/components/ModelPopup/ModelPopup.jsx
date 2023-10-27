import React, { useState } from "react";
import "./ModelPopup.css";

const ModelPopup = ({ setShowModal }) => {
  return (
    <div className="modalContainer">
      <form action="">
        <div className="modalBox">
          <div className="modalHeader">
            <h2>New Employee Details</h2>
          </div>
          {/* <ImageUpload setImageURL={setImageURL}/> */}

          <div className="modalInner">
            <div className="input-container">
              <div className="input-box">
                <label htmlFor="">First Name</label>
                <input type="text" name="firstname" required values="" />
              </div>
              <div className="input-box">
                <label htmlFor="">Last Name</label>
                <input type="text" name="lastname" required values="" />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="">image</label>
              <input type="text" name="image" required values="" />
            </div>

            <div className="input-container">
              <div className="input-box">
                <label htmlFor="">Email Address</label>
                <input type="email" name="email" required values="" />
              </div>
              <div className="input-box">
                <label htmlFor="">Phone</label>
                <input type="text" name="phone" required values="" />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="">Job-position</label>
              <input type="text" name="job" required values="" />
            </div>
            <div className="input-box">
              <label htmlFor="">Date of Joining</label>
              <input type="date" name="dateofjoining" required values="" />
            </div>
            <div className="modalFooter">
              <button className="add-btn" type="submit"> Add Employee</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModelPopup;
