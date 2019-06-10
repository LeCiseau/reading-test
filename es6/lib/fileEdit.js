/**
 * @file lib/fileEdit.js
 * @author Damien Benloukil <damien@leciseau.fr>
 * Date: 05.02.2018
 * Last Modified Date: 05.02.2018
 * Last Modified By: Damien Benloukil <damien@leciseau.fr>
 */
const fs = require('fs');
const request = require('request');

module.exports.writeToFile = (fileName, url) => new Promise((resolve, reject) =>
    request(url, (error, response, body) =>
        response.statusCode !== 200 ? reject(error) :
            fs.writeFile(fileName, body, (err) => {
                if (err) { reject(err) };
            })
    )
);

module.exports.readFromFile = (fileName) => new Promise((resolve, reject) =>
    fs.readFile(fileName, 'utf-8', (err, content) =>
        err === null ? resolve(content) : reject(err))
);
