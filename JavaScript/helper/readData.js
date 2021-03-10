const fs = require('fs');

function getData(cb) {
  fs.readFile('./data/data.json', 'utf8', function (err, data) {
    if (err) {
      console.log(err)
    }
    cb(JSON.parse(data))
  })
}

module.exports = getData