import mongoose from "mongoose";

const empSchema = mongoose.Schema({
  personalInfo: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
  },
  workInfo: {
    level: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
    },
    startDate: {
      type: String,
    },
  },
});

export const Employee = mongoose.model("Employee", empSchema);