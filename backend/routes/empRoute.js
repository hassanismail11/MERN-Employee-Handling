import express from "express";
import { Employee } from "../models/empModel.js";

const router = express.Router();

// Route to get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find({});

    return res.status(200).json({
      count: employees.length,
      data: employees,
    });
  } catch (error) {
    console.log(error.message);
    res.send({ message: error.message });
  }
});

// Route to add a new employee
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.personalInfo.firstName ||
      !req.body.personalInfo.lastName ||
      !req.body.personalInfo.phone ||
      !req.body.workInfo.level ||
      !req.body.workInfo.role
    ) {
      return res.send({
        message: "Please Fill All Reqired Data",
      });
    }
    const newEmployee = {
      personalInfo: {
        firstName: req.body.personalInfo.firstName,
        lastName: req.body.personalInfo.lastName,
        email: req.body.personalInfo.email,
        address: req.body.personalInfo.address,
        phone: req.body.personalInfo.phone,
        imageUrl: req.body.personalInfo.imageUrl,
      },
      workInfo: {
        level: req.body.workInfo.level,
        role: req.body.workInfo.role,
        startDate: req.body.workInfo.startDate,
      },
    };
    const employee = await Employee.create(newEmployee);
    return res.send(employee);
  } catch (error) {
    console.log(error.message);
    res.send({ message: error.message });
  }
});

// Route to find an employee ************ missing (find by various data)
router.get("/:param", async (req, res) => {
  try {
    ///////////////////////////////conditional search
    const { param } = req.params;

    const employee = await Employee.findOne({});

    return res.send(employee);
  } catch (error) {
    console.log(error.message);
    res.send({ message: error.message });
  }
});

// Route to edit employee info ************ missing (find by various data)
router.put("/:param", async (req, res) => {
  try {
    const { param } = req.params;

    const employee = await Employee.findOneAndUpdate();

    if (!employee) {
      return response.status(404).json({ message: "Employee not found" });
    }

    return response
      .status(200)
      .send({ message: "Employee Data Successfully Updated" });
  } catch (error) {
    console.log(error.message);
    res.send({ message: error.message });
  }
});

// Route to delete an employee ************ missing (find by various data)
router.delete("/:param", async (req, res) => {
    try {
      const { param } = req.params;
  
      const employee = await Employee.findOneAndDelete();
  
      if (!employee) {
        return response.status(404).json({ message: "Employee not found" });
      }
  
      return response
        .status(200)
        .send({ message: "Employee Data Successfully Deleted" });
    } catch (error) {
      console.log(error.message);
      res.send({ message: error.message });
    }
  });

export default router;