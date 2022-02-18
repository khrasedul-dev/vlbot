const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema(
    {
        message: {
            type: String
        }
    }
)


module.exports = mongoose.model('xjian', dataSchema)