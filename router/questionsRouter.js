const questionRouter = require('express').Router();

questionRouter.get('/', async (req,res)=>{
try {
    res.render('pages/addQuestion.twig')
} catch (error) {
    console.log(error);
    res.send(error)
}
})

questionRouter.post('/question', async (req,res)=>{
    try {
     
    } catch (error) {
        console.log(error);
        res.send(error)
    }
    })

module.exports = questionRouter;