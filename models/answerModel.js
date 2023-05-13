const mongoose = require('mongoose');
const aswerSchema = new mongoose.Schema({
    userId: {
        type: Number
    },
    questionId:{
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'questions'
        }
    }
});
const answerModel = mongoose.model('answers', answerSchema);
module.exports = answerModel;
