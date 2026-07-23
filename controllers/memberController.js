import Member from "../models/Member.js";

//Create member
export const createMember = async (req, res) => {
  try {
    const member = await Member.create(req.body);

    res.status(201).json({
      message: "Member created successfully",
      member,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get all members
export const getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();

    res.status(200).json({
      message: "Members retrieved successfully",
      members,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get one member by ID
export const getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(404).json({
        message: "Member not found",
      });
    }
    res.status(200).json({
      message: "Member retrieved successfully",
      member,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update member
export const updateMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!member) {
      return res.status(404).json({
        message: "Member not found",
      });
    }
    res.status(200).json({
      message: "Member updated successfully",
      member,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete member
export const deleteMember = async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);

    if (!member) {
      return res.status(404).json({
        message: "Member not found",
      });
    }

    res.status(200).json({
      message: "Member deleted successfully",
      member,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
