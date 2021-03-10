const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))

function improved(data) {
  let result = { h: [], d: [] }
  result.h.push("username", "hair_color", "height")
  for (let i = 0; i < data.length; i++) {
    result.d.push(data[i].username, data[i].hair_color, data[i].height)
  }
  return result
}

console.log(improved(data));