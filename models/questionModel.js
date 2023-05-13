const mongoose = require('mongoose')
const questionSchema = new mongoose.Schema({
    label: {
        type: String,
        required: [true, 'Label is required']
    },
    type: {
        type: String,
        required: [true, 'Type is required']
    },
    choices: {
        type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "choices"
            }]
    },
    minChoice: {
        type: Number
    },
    maxChoice: {
        type: Number 
    },
    order: {
        type : Number
    }
})
const questionModel = mongoose.model('questions',questionSchema);
module.exports = questionModel;
