const questionModel = require('../models/questionModel');

const questionRouter = require('express').Router();

questionRouter.get('/', async (req,res)=>{
try {
    res.render('pages/addQuestion.twig')
} catch (error) {
    console.log(error);
    res.send(error)
}
})

questionRouter.post('/addquestion', async (req,res)=>{
    try {
     let question = new questionModel(req.body)
     await question.save()
     res.redirect('/')
    } catch (error) {
        console.log(error);
        res.send(error)
    }
    })

module.exports = questionRouter;