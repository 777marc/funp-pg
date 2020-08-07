console.log('file read');

const fs = require('fs');

fs.readFile('myFile.txt', 'utf-8', (err, result) => {
    if(err) throw err;
    console.log(result);
});