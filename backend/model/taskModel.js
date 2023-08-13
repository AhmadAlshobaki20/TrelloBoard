//  call mongoose
const mongoose = require("mongoose");

// create Task Schema
const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subTask: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "subTask",
    },
  ],
  status: String,
  createdAt: { type: Date, default: Date.now },
  listId: {
    type: mongoose.Schema.ObjectId,
    ref: "List",
  },
});

taskSchema.pre(/^find/, function (next) {
  this.populate("subTask");
  next();
});
// create task model

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
