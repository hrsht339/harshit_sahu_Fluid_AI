const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
        title: String,
        description: String,
        dueDate: Date,
        priority: String,
        status: String
})

const taskModel = mongoose.model("task",taskSchema)

module.exports = {
    taskModel
}