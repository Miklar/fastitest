const fs = require('fs');
const path = require('path');
const glob = require('glob');

module.exports = () =>
    new Promise((res, rej) => {
        glob('./**/*/controller.js', (err, files) => {
            if (err) rej(err);

            res(files.map(f => require(f)));
        });
    })
