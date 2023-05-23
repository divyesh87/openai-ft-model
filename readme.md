This project allows creation of fine tuned models using openai's davinci model.

OpenAi requires training data to be fed in jsonl format , the data used in this case is for ethereum blockchain. This data was sourced from chatgpt itself.  

The project contains 3 scripts : 
api.js : Sets up the Openai package using your api key,
uploadData.js : uploads your training data to openai and returns a unique file id,
fineTune.js : creates your fine tuned model 

However this service isnt free, i have not been able to create a fine tuned model. If provided with a premium account all i need to do is plugin the api key in the code and the model would be up and running .
 
Thanks
