const path = require('path');
const fs = require('fs');

const KEY_VALUE_SEPARATOR = '='
const NEWLINES_MATCH = / \r\n|\n\r /

function parse(src) {
    const obj = {}

    src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {
        const keyValuePair = line.split(KEY_VALUE_SEPARATOR);
        if (keyValuePair && keyValuePair.length == 2) {
            const key = keyValuePair[0].trim();
            const value = keyValuePair[1].trim();

            obj[key] = value;
        } else {
            console.log(`invalide key value pair when parsing line ${idx + 1}`);
        }
    });

    return obj;
}

function config() {
    const filePath = path.resolve(process.cwd(), '.env');
    const encoding = 'utf8';

    try {
        const data = fs.readFileSync(filePath, { encoding });
        const parsed = parse(data);

        Object.keys(parsed).forEach(function (key) {
            if (!Object.prototype.hasOwnProperty(process.env, key)) {
                process.env[key] = parsed[key];
            } else {
                console.log(`${key} is already in \`process.env\``);
            }
        });

        return { parsed }
    } catch (error) {
        return { error }
    }
}

module.exports = {
    config
};