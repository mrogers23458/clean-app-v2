const { Schema, model } = require('mongoose')

const taskSchema = new Schema (
    {
        title: String,
        description: String,
        area: String,
        owner: String
    }
)

const Task = model('Task', taskSchema)

module.exports = Task;