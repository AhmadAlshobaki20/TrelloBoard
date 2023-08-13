const express = require("express");
const listController = require("../controller/listController");
const taskController = require("../controller/taskController.js");
const router = express.Router();

router
  .route("/")
  .get(listController.getAllList)
  .post(listController.createList);

  router.route("/:id").get(listController.getList).patch().delete();
  
  router.route("/:listId/tasks").post(taskController.createTask);
module.exports = router;
