import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
      required: true,
    },
    targetAudience: {
      type: String,
      enum: ["All Members", "Specific Departments"],
      default: "All Members",
      required: true,
    },
    targetDepartments: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Department",
    },
    attachment: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Active", "Archived"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  },
);

const Announcement = mongoose.model("Announcement", announcementSchema);

export default Announcement;
