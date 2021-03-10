const router = require('express').Router()
const Controller = require('./controller/index')

router.get('/list', Controller.list)

module.exports = router