// Bài 1
// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
//     setTimeout(() => resolve(2), 1000);
// });

// promise.then(alert);


// Bài 2
// const axios = require('axios');

// 1
// async function fetchUrls(urls) {
//     const results = [];
//     for (const url of urls) {
//         const res = await axios.get(url);
//         results.push(res);
//     }
//     return results;
// }


// 2
// async function fetchUrlsParallel(urls) {
//     const results = await Promise.all(
//         urls.map(function(url) {
//             return axios.get(url);
//         })
//     );
//     return results;
// }


// Bài 3
const fs = require('fs');
const axios = require('axios');

function readFileAsync(path, options) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

async function getData() {
    try {
        const data = await readFileAsync('./data.json', {encoding: 'utf8'});
        console.log('Data loaded from disk', data);

        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Data downloaded from url', res.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

getData();
