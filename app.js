const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8080;
const cors = require('cors');
app.use(cors)
const apiRouter = require("./routes/api");

app.use(express.json());

app.get('/', (req, res) => res.send('Testing'))

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Llama Express app listening on port ${PORT}`)
})

module.exports = app;