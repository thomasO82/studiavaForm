const questionModel = require('../models/questionModel');

const questionRouter = require('express').Router();

questionRouter.get('/', async (req, res) => {
    try {
        res.render('pages/addQuestion.twig')
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

questionRouter.get('/displayquestion', async (req, res) => {
    try {
        let questions = await questionModel.find()
        res.render('pages/diplayquestion.twig', {
            questions: questions
        })

    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

questionRouter.get('/deletequestion/:id', async (req, res) => {
    try {
        await questionModel.deleteOne({_id : req.params.id})
        res.redirect('/displayquestion')

    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

questionRouter.get('/getupdatequestion/:id', async (req, res) => {
    try {
        let question = await questionModel.findOne({_id : req.params.id})
        res.render('pages/addQuestion.twig', {
            question: question
        })

    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

questionRouter.post('/addquestion', async (req, res) => {
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