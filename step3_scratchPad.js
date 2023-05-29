const argv = process.argv;


const fs = require('fs');

const axios = require('axios');

const content = "TEsting, will be a file name later";

// function cat(path) {
// fs.readFile(path, 'utf8', (err, data) => {
// if (err) {
// console.error(`Error reading one.txt, try opening ${err})`)
// process.exit(1);
// } else {
// console.log(data);
// }
// });
// }
// 
// 
// async function WebGLActiveInfo(url) {
// try {
// let resp = await axios.get(url);
// console.log(resp.data);
// } catch (err) {
// console.error(`Error fetching ${url}: ${err}`);
// process.exit(1)
// }
// }
// 
// if (path.slice(0, 4) === 'http') {
// webCat(path, out);
// } else {
// cat(path, out);
// }

function handleOutput(text, out) {
    fs.writeFile(out, text, 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log("Success to write the file, testing new as of 2:32 pm")
        console.log(data)
    })
}

let path;
let out;

if (process.argv[2] === '--out') {
    out = process.argv[3]
    path = process.argv[4]
} else {
    path = process.argv[2];
}


