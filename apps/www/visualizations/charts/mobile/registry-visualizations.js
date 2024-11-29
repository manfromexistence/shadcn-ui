const fs = require('fs');
const translator = require("@/ogt/src");
const path = require('path');

translator.supportedLanguages();

function findMetaJsonFiles(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        const filePath = path.join(dir, file.name);
        if (file.isDirectory()) {
            findMetaJsonFiles(filePath);
        } else if (file.name === 'meta.json') {
            const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            console.log(filePath);
            console.log(JSON.stringify(jsonData, null, 2))
        }
    }
}

const rootDir = './';
findMetaJsonFiles(rootDir);
