const { openAi } = require("./api.js")
const fs = require("fs")

async function upload() {

    try {
        const data = fs.createReadStream("./data_prepared.jsonl")
        const res = await openAi.createFile(data, "fine-tune");
        const fileId = res.data.id
        console.log("file id : " + fileId);
    } catch (e) {
        console.log("Err : " + e);
    }
}

upload()