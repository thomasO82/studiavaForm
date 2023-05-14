const mongoose = require('mongoose')
const questionSchema = new mongoose.Schema({
    label: {
        type: String,
        required: [true, 'Label is required']
    },
    columnName:{
        type:String
    },
    type: {
        type: String,
        required: [true, 'Type is required']
    },
    choices: {
        type: []
    },
    minSelections: {
        type: Number
    },
    maxSelections: {
        type: Number
    },
    order: {
        type: Number
    }

})
const questionModel = mongoose.model('questions', questionSchema);
module.exports = questionModel;
