const llamaRouter = require("express").Router();
const {
    getLlamaData
  } = require("../controllers/llama");

llamaRouter.route("/").post(getLlamaData);

module.exports = llamaRouter;

