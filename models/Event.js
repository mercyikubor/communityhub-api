import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    eventDescription: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    eventLocation: {
      type: String,
      required: true,
    },
    eventFlyers: {
      type: String,
    },
    eventStatus: {
      type: String,
      enum: ["Upcoming", "Ongoing", "Completed", "Cancelled", "Postponed"],
      default: "Upcoming",
    },
  },
  {
    timestamps: true,
  },
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
