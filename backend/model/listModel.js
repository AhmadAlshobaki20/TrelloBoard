const mongoose = require("mongoose");

// create list schema
const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  listOfTasks: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Task",
    },
  ],
  color: {
    type: "string",
    default: generateRandomColor,
  }
});

// this middleware responsible for populate(fill up the data when any query occur)
// this middle is going run each time there is query
listSchema.pre(/^find/, function(next){
  this.populate('listOfTasks')
  next();
})

// Generate a random color code in hexadecimal format
function generateRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}

// create list model
const List = mongoose.model("List", listSchema);
module.exports = List;
