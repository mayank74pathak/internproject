const Task = require("../models/Task");

// Create Task
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      task,
    });
  } catch (error) {
      next(error);
  }
};
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user._id,
    });

    res.status(200).json({
      success: true,
      count: tasks.length,
      tasks,
    });
  } catch (error) {
   next(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    task.title = req.body.title || task.title;
    task.description =
      req.body.description || task.description;
    task.status = req.body.status || task.status;

    const updatedTask = await task.save();

    res.status(200).json({
      success: true,
      task: updatedTask,
    });
  } catch (error) {
     next(error);
  }
};


const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    await task.deleteOne();

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
   next(error);
  }
};







module.exports = {
   createTask,
  getTasks,
  updateTask,
  deleteTask,
};