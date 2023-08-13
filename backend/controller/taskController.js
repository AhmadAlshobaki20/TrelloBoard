const Task = require("../model/taskModel");
const List = require("./../model/listModel");

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      result: tasks.length,
      status: "success",
      data: {
        tasks: tasks,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

exports.createTask = async (req, res) => {
  try {
    const listId = req.params.listId;
    console.log(listId);
    const newTask = await Task.create({
      title: req.body.title,
      description: req.body.description,
      subTask: req.body.subTask,
      status: req.body.status,
      listId: listId,
    });
    res.status(200).json({
      Task: newTask,
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

exports.getTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId).populate("listId");
    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndDelete(taskId);
    res.status(200).json({
      task: null,
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};
