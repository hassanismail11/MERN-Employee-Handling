import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = (empData) => {
  const [dropDown, setDropdown] = useState(false);

  return (
    <div className="card-component">
      <div className="card-inner">
        <div className="dropdownContainer">
          <BsThreeDotsVertical
            size={20}
            onClick={() => setDropdown(!dropDown)}
          />
          {dropDown && (
            <ul className="dropdown" onMouseLeave={() => setDropdown(false)}>
              <li>Edit</li>
              <li>Delete</li>
            </ul>
          )}
        </div>
        <div className="profileImage">
          <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt={""} />
        </div>
        <div className="emp-detail">
          <h3>
            {empData.empData.personalInfo.firstName}{" "}
            {empData.empData.personalInfo.lastName}
          </h3>
          <p>{empData.empData.personalInfo.email}</p>
        </div>
      </div>
      <div className="job-role"><p>{empData.empData.workInfo.role}</p></div>
    </div>
  );
};

export default Card;
