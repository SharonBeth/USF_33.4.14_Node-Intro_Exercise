
///////////Below was a test run from example from Node.JS Docs
// import { argv } from 'node:process';
// 
// argv.forEach((val, index) => {
// console.log(`${index}: ${val}`);
// });
/////////////////////////

const argv = process.argv;

console.log(argv[2]);

const fs = require('fs');
// 
fs.readFile(argv[2], 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading one.txt, try opening ${err})`)
        process.exit(1);
    }
    console.log("Data", data)
})
//
// console.log("testing");
// 
// fs.writeFile('one.txt', 'utf8', (err, data) => {
// 
// })