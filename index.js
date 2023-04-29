const express = require('express')
const { connection } = require('./config/db')
const { invoiceRouter } = require('./routes/InvoiceRoutes')
const app = express()
require('dotenv').config()



app.use('/invoice', invoiceRouter)

app.get("/", (req, res) => {
    res.send(`welcome back`)
})

// server will run at port ****** ----------------------------------------->

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log(`DB connected Successfully`)
    } catch (err) {
        console.log('unable to connect with DB', err)
    }
    console.log(`server running on port ${process.env.port}`)
})