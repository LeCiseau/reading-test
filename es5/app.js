/**
 * @file readingTest/es5/app.js
 * @author Damien Benloukil <damien@leciseau.fr>
 * Date: 05.02.2018
 * Last Modified Date: 05.02.2018
 * Last Modified By: Damien Benloukil <damien@leciseau.fr>
 */

var exec = require('child_process').execSync;
var io = require('./lib/fileEdit');
var clean = exec('echo "" > tmp.txt');

io.writeToFile('tmp.txt', 'https://fr.wikipedia.org/wiki/Nicolas_Cage');
io.readFromFile('tmp.txt', function (stream, err) {
    err !== null ? console.error(err) : console.log('output is: ' + stream);
});


