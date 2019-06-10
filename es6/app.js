/**
 * @file app.js
 * @author Damien Benloukil <damien@leciseau.fr>
 * Date: 05.02.2018
 * Last Modified Date: 05.02.2018
 * Last Modified By: Damien Benloukil <damien@leciseau.fr>
 */

const { execSync } = require('child_process');
const { writeToFile, readFromFile } = require('./lib/fileEdit');
const clean = execSync('echo "" > tmp.txt');

writeToFile('tmp.txt', 'https://fr.wikipedia.org/wiki/Nicolas_Cage');
readFromFile('tmp.txt')
    .then(stream => console.log(`output is: ${stream}`))
    .catch(err => console.error(err));
