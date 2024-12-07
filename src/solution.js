// Loaie Shalloufi - 211757166
// 48-5

// modules and imports
const fs = require('fs');
const path = require('path');

// Setting up file path variables
const dirPath = path.join(__dirname, '/text');
const filesArray = [];
for (let index = 1; index <= 10; index++) {
    filesArray.push(`input (${index}).txt`);
}

let textToSave = "";

// Iterate over all text files
filesArray.forEach((filename, amountOfLines) => {
    // Open the text file, read its content, and create an array of its lines.
    const fileContentLines = fs.readFileSync(`${dirPath}/${filename}`, 'utf-8').split('\n');
    // Only add lines up to the current required amountOfLines.
    fileContentLines.forEach((line, index) =>  textToSave += (index <= amountOfLines ? line : ""));
})

// Finally, write the data to a new file "output.txt"
// output.txt should be 55 lines long (sum of 1-->10)
fs.writeFileSync(`${dirPath}/output.txt`, textToSave);
