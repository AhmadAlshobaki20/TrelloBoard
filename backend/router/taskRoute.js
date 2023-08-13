const express = require("express");
const taskController = require("./../controller/taskController.js");
const subTaskController = require("./../controller/subTaskController.js");
const router = express.Router();

router
  .route("/")
  .get(taskController.getAllTasks)
  .post(taskController.createTask);

router
  .route("/:id")
  .get(taskController.getTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

router
  .route("/:taskId/subtask")
  .post(subTaskController.createSubTask)
  .get(subTaskController.getAllSubtask);

module.exports = router;
