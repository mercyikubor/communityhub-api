import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    departmentName: {
      type: String,
      required: true,
      unique: true,
    },
    departmentDescription: {
      type: String,
      required: true,
    },
    departmentLeader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },
  },
  {
    timestamps: true,
  },
);

const Department = mongoose.model("Department", departmentSchema);

export default Department;
