const llamaRouter = require("express").Router();
const {
    getLlamaData
  } = require("../controllers/llama");

llamaRouter.route("/").get(getLlamaData);

module.exports = llamaRouter;

