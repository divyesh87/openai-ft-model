const { Configuration, OpenAIApi } = require('openai');

require('dotenv').config();

const openaiApiKey = process.env.OPENAI_KEY;

const config = new Configuration({
    apiKey: openaiApiKey
})

module.exports = {
    openAi : new OpenAIApi(config)
}