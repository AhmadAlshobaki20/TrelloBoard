const express = require("express");
const taskRouter = require("./router/taskRoute");
const listRouter = require("./router/listRoute");
const subtaskRouter = require("./router/subTaskRouter");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

// mounting process
app.use("/api/v1/lists", listRouter);
app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/subtask", subtaskRouter);

module.exports = app;
