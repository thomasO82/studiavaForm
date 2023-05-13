const mongoose = require('mongoose');
const choiceSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'questions'
    },
    label: {
        type: String
    },
    selectedChoices: {
        type: []
    }
});
const choiceModel = mongoose.model('choice', choiceSchema);
module.exports = choiceModel;
