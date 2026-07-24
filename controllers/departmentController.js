import Department from "../models/Department.js";

// @desc    create a department, handles duplicate name and saving them to database
// @route   POST /api/departments
export const createDepartment = async (req, res) => {
  try {
    const { departmentName, departmentDescription, departmentLeader } = req.body;
    
    const department = await Department.create({
      departmentName,
      departmentDescription,
      departmentLeader,
    });

    res.status(201).json({
      success: true,
      data: department,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Department name already exists",
      });
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all departments
// @route   GET /api/departments
export const getAllDepartments = async (req, res) => {
  try {
    // Fetch every department document from the collection
    const departments = await Department.find();

    res.status(200).json({
      success: true,
      count: departments.length,
      data: departments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// @desc    Get single department by ID
// @route   GET /api/departments/:id
export const getDepartmentById = async (req, res) => {
  try {
    // req.params.id comes from the :id part of the route URL
    const department = await Department.findById(req.params.id);

    // If no department matches that ID, respond with 404 instead of null data
    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    res.status(200).json({
      success: true,
      data: department,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// @desc    Update a department
// @route   PUT /api/departments/:id
export const updateDepartment = async (req, res) => {
  try {
    const { departmentName, departmentDescription, departmentLeader } = req.body;

    const department = await Department.findByIdAndUpdate(
      req.params.id,
      { departmentName, departmentDescription, departmentLeader },
      { new: true, runValidators: true }
    );

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    res.status(200).json({
      success: true,
      data: department,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Department name already exists",
      });
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// @desc    Delete a department
// @route   DELETE /api/departments/:id
export const deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Department deleted successfully",
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};