const mongoose = require('mongoose');
const aswerSchema = new mongoose.Schema({
    userId: {
        type: Number
    },
    answers: {
        type: [
          
        ]
    }
});
const answerModel = mongoose.model('answers', answerSchema);
module.exports = answerModel;
