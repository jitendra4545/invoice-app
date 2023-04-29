const mongoose = require('mongoose')
const express = require('express')





const invoiceRouter = express.Router()



invoiceRouter.get('/', (req, res) => {
    res.send('hi guys')
})


module.exports = {
    invoiceRouter
}