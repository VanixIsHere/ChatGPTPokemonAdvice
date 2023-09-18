require('dotenv').config()
const { v4 } = require("./node_modules/uuid");

exports.handler = async (event) => {
  const { ChatGPTAPI } = await import("chatgpt");
  const api = new ChatGPTAPI({
    apiKey: process.env.GPT_API,

    /*
    completionParams: {
      model: 'gpt-3.5-turbo',
    },
    */
  })
  const uuid = v4();
  await api.sendMessage('What is a pokemon?').then((res) => {
    console.log({
      "id": uuid,
      "response": res,
    });
  });
}