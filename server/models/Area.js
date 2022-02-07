const { Schema, model } = require('mongoose')

const areaSchema = new Schema (
    {
        name: String,
        description: String,
        tabColor: String,
        owner: String
    }
)

const Area = model('Area', areaSchema)

module.exports = Area;