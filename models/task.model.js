const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    userID: {
      type: String,
    },
    userName: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

const TaskModel = mongoose.model("task", taskSchema);

module.exports = {
  TaskModel,
};
