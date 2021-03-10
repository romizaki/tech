const getData = require('../helper/readData')

class Controller {
  static list(req, res) {
    let result = {
      h: [],
      d: []
    }

    getData(function (data) {
      for (const i in data) {
        let temp = []
        for (const j in data[i]) {
          if (i == 0) {
            result.h.push(j)
          }
          temp.push(data[i][j])
        }
        result.d.push(temp)
      }
      res.send(result)
    })
  }
}

module.exports = Controller