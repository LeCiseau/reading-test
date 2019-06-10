/**
 * @file readingTest/es5/lib/fileEdit.js
 * @author Damien Benloukil <damien@leciseau.fr>
 * Date: 05.02.2018
 * Last Modified Date: 05.02.2018
 * Last Modified By: Damien Benloukil <damien@leciseau.fr>
 */

var fs = require('fs');
var request = require('request');

module.exports.writeToFile = function (fileName, url) {
        request(url, function (error, response, body) {
            response.statusCode !== 200 ? console.error(err) : fs.writeFile(fileName, body, function (err) {
                if (err) {
                    throw err;
                }
            });
        });
};

module.exports.readFromFile = function (fileName, fct) {
    return fs.readFile(fileName, 'utf-8', function (err, content) {
        fct(content, err) 
    });
};

