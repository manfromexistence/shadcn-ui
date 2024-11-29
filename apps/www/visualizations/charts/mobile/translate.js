const fs = require('fs');
const translator = require("@/ogt/src");

translator.supportedLanguages();

async function translateJson(filePath) {
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (const demo of jsonData.demos) {
        translator
            .TranslateLanguageData({
                listOfWordsToTranslate: [demo.title],
                fromLanguage: "zh-CN",
                toLanguage: "en",
            })
            .then((data) => {
                console.log(data);
                demo.title = data;
                fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
            });
    }

    console.log('Translation completed!');
}

translateJson('column/stack/demo/meta.json');
