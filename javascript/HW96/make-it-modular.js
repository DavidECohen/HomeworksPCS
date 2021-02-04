const mymodule = require('./mymodule.js');
//mymodule();

const fs = require('fs');
const ext = process.argv[3]
const dir = (process.argv[2]);

mymodule(dir, ext, callit)

function callit(err, data) {
    if (err) {
        alert('error')
    }
    data.forEach(element => {
        console.log(element)

    });
}