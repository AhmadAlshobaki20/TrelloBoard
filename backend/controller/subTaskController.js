const subTask = require("./../model/subTask");

// create subtask
exports.createSubTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const newSubTask = await subTask.create({
      title: req.body.title,
      status: req.body.status,
      taskId: taskId,
    });
    res.status(201).json({
      status: "success",
      data: {
        newSubTask: newSubTask,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

exports.getAllSubtask = async (req, res) => {
  try {
    const subTasks = await subTask.find();
    res.status(201).json({
      result: subTask.length,
      status: "success",
      data: {
        subTasks: subTasks,
      },
    });
  } catch (err) {
    res.status(404).json({
      message: err,
    });
  }
};

exports.getSubTask = async (req,res)   => {
  try {
    const subTaskId = req.params.id;
    const subtask = await subTask.findById(subTaskId);
    res.status(200).json({
      data: {
        subtask: subtask,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
