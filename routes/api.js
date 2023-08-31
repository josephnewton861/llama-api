const apiRouter = require("express").Router();
const llamaRouter = require('../routes/llama')

apiRouter.get("/", (req, res, next) => res.send('Testing my API'));

apiRouter.use('/llama', llamaRouter)

module.exports = apiRouter;