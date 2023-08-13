const mongoose = require("mongoose");

const subTaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "subtask must have an title🗒️"],
  },
  status: {
    type: Boolean,
    default:false
  },
  taskId: {
    type: mongoose.Schema.ObjectId,
    ref:"Task"
  },
});



const subTask = mongoose.model("subTask", subTaskSchema);

module.exports = subTask;