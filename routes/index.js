const express = require('express')

const router  = express.Router()

// Home Page

router.get('/', (req,res) => {
    res.render('index')
})

router.get('/donate', (req,res) => {
    res.render('donate')
})


module.exports = router