import React, { useEffect, useState } from "react";
import "./MainSection.css";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Card from "./components/Card";
import ModelPopup from "../ModelPopup/ModelPopup";
import { axiosGet } from "../../axiosServices";
import EditDetailsModal from "../ModelPopup/EditDetailsModal";

const MainSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axiosGet((res) => setEmployees(res));
  });

  return (
    <>
      {showModal && <ModelPopup setShowModal={setShowModal} />}
      <main className="mainContainer">
        <div className="mainWrapper">
          <h1>
            People <span className="emp-count">{employees.length}</span>
          </h1>
          <div className="employeeHeader">
            <div className="searchBox">
              <input
                type="text"
                placeholder="Search by name, email, designation etc"
              />
              <BiSearch size={20} />
            </div>
            <button className="add-btn" onClick={() => setShowModal(true)}>
              <IoMdAdd size="20" color="#fffff" />
              Add Employee
            </button>
          </div>
          <div className="employees">
            {employees &&
              employees.map((emp) => {
                if (emp.workInfo.level === 1) {
                  return (
                    <div key={emp._id}>
                      <Card empData={emp} />
                    </div>
                  );
                }
              })}
          </div>
          <div className="employees">
            {employees &&
              employees.map((emp) => {
                if (emp.workInfo.level === 2) {
                  return (
                    <div key={emp._id}>
                      <Card empData={emp} />
                    </div>
                  );
                }
              })}
          </div>
          <div className="employees">
            {employees &&
              employees.map((emp) => {
                if (emp.workInfo.level === 3) {
                  return (
                    <div key={emp._id}>
                      <Card empData={emp} />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </main>
    </>
  );
};

export default MainSection;
