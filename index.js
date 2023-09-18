require('dotenv').config()
const { v4 } = require("./node_modules/uuid");

exports.handler = async (event) => {
  const { ChatGPTAPI } = await import("chatgpt");
  const api = new ChatGPTAPI({
    apiKey: process.env.GPT_API,
    
    completionParams: {},
  })
  const uuid = v4();
  let res = await api.sendMessage('What is a pokemon?');
  return {
    "id": uuid,
    "response": res,
  };
}