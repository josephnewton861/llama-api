const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors)
const apiRouter = require("./routes/api");

app.all("/*", (req, res, next) => {
    res.status(404).send({ msg: "Path not found" });
  });

app.use(express.json());

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Llama Express app listening on port ${port}`)
})

module.exports = app;