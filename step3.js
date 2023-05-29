const fs = require('fs');
const process = require('process');
const axios = require('axios');

//The assignment for this is to take a command line, run it with the given factors:
//    node step3.js --out new.txt one.txt
// process.argv[0] = Run Node.JS
// process.argv[1] = step3.js (The file to run in Node.JS environment)
// process.argv[2] = Command that can be defined in JS file
// process.argv[3] = Create a new file named new.txt
// process.argv[4] = pull the data from one.txt and put it into the nexly created file new.txt


function handleOutput(data, out) {
    if (out) {
        console.log("out works")
        fs.writeFile(out, data, 'utf8', function (err) {
            if (err) {
                console.err(err);
                process.exit(1);
            }
        });
    } else {
        console.log(data)
    }
};

function cat(path, out) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error redaing ${path}: ${err}`);
            process.exit(1);
        } else {
            console.log(data);
            handleOutput(data, out);
        }
    });
}

async function webCat(url, out) {
    try {
        let resp = await axios.get(url);
        handleOutput(resp.data, out);
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}

let path;
let out;
// this if statement decides if you are making a new file or not
if (process.argv[2] === '--out') {
    out = process.argv[4];
    path = process.argv[3];
} else {
    path = process.argv[2];
}


//This if statement decides if what is being read is a file or http & then sending to the correct function based on that info.
if (path.slice(0, 4) === 'http') {
    console.log("path.slice" + path, out)
    webCat(path, out);

} else {
    console.log("path.slice, else" + path)
    cat(path, out)
}