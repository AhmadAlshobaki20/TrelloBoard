const Task = require("../model/taskModel");
const List = require("./../model/listModel");
const subTask = require("./../model/subTask");
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
    res.status(500).json({
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
    const updateTasks = await List.findById(listId);
    updateTasks.listOfTasks.push(newTask._id);
    updateTasks.save();
    res.status(200).json({
      Task: newTask,
    });
  } catch (err) {
    res.status(500).json({
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
    res.status(500).json({
      message: err,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndDelete(taskId);
    await subTask.deleteMany({taskId:taskId});
    res.status(200).json({
      task: null,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updateTask = await Task.findByIdAndUpdate(taskId, req.body, {
      new: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        updateTask,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};
