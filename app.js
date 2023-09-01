const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const cors = require('cors');
app.use(cors)
const apiRouter = require("./routes/api");

app.use(express.json());

app.get('/', (req, res) => res.send('Testing'))

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Llama Express app listening on port ${port}`)
})

module.exports = app;