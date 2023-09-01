const fetch = require('node-fetch')
// const express = require('express')
// const app = express()
const Replicate = require('replicate');
// const cors = require('cors');
// app.use(cors)

require('dotenv').config()

const apiToken = process.env.API_TOKEN;

exports.fetchLlamaData = async (input) => {

    const replicate = new Replicate({
        auth: apiToken,
        fetch,
    });

    const options = {
        data: {
            input: {
                prompt: input || ''
            },
        },
    }
    const output = await replicate.run("a16z-infra/llama-2-7b-chat:d24902e3fa9b698cc208b5e63136c4e26e828659a9f09827ca6ec5bb83014381", {...options})
    const formattedOutput = formatResponse(output);
    console.log(formattedOutput)
    return formattedOutput;
};


const formatResponse = (output) => {
    let formattedStr = ''
    for (let i = 0; i < output.length; i++) {
        formattedStr += output[i];
    }
    return formattedStr;
}