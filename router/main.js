const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.end('ok')
})

module.exports = router