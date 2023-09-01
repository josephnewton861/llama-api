const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())
require('dotenv').config()
const PORT = process.env.PORT || 8080;
const apiRouter = require("./routes/api");

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Llama Express app listening on port ${PORT}`)
})

module.exports = app;