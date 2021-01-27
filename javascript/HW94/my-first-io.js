const fs = require('fs');
const buffer = fs.readFileSync(process.argv[2]);
const inString = buffer.toString();
const splitter = inString.split('\n');
console.log(splitter.length - 1)