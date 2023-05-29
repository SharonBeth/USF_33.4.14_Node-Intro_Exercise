const argv = process.argv;

let path = argv[2];

const fs = require('fs');

const axios = require('axios');

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading one.txt, try opening ${err})`)
            process.exit(1);
        } else {
            console.log(data);
        }
    });
}


async function webCat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1)
    }
}

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}



