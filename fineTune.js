const { openAi } = require("./api.js")

async function fineTune() {
    try {

        const res = await openAi.createFineTune({
            training_file: "file-BN0lige2ta8cIFPmIJVJrBRe",
            model: "davinci"
        })
        console.log(res);

    } catch (error) {
        console.log("Err : " + error);
    }
}

fineTune()