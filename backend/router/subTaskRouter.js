const express = require("express");
const subTaskController = require("./../controller/subTaskController");
const router = express.Router();

router
  .route("/")
  .get(subTaskController.getAllSubtask)
  .post(subTaskController.createSubTask);

router.route('/:id').get(subTaskController.getSubTask)  
module.exports = router;
