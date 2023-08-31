const { fetchLlamaData } = require("../models/llama");

exports.getLlamaData = async (req, res, next) => {
    const input = req.body
    fetchLlamaData(input)
        .then(output => {
            console.log(output)
            res.send(output)
            //res.status(200).send(output);
        })
        .catch(err => {
            console.log(err)
            res.send(err)
    });
};



