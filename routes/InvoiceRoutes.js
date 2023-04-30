const mongoose = require('mongoose')
const express = require('express')
const { CustomerModel } = require('../model/CustomerModel')
const { SupplierModel } = require('../model/SuppliersModel')





const invoiceRouter = express.Router()



invoiceRouter.get('/', (req, res) => {
    res.send('hi guys')
})

invoiceRouter.post("/customer/add", async (req, res) => {
    let data = req.body
    try {
        let newData = new CustomerModel(data)
        await newData.save()
        res.send({ "msg": "Customer added to the list" })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot add", "error": err.message })
    }
})


invoiceRouter.delete("/customer/delete/:id", async (req, res) => {
    let id = req.params.id
    try {
        await CustomerModel.findOneAndDelete({ _id: id })
        res.send({ "msg": "Customer has been deleted" })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot delete", "error": err.message })
    }
})



invoiceRouter.post("/supplier/add", async (req, res) => {
    let data = req.body
    try {
        let newData = new SupplierModel(data)
        await newData.save()
        res.send({ "msg": "Supplier added to the list" })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot add", "error": err.message })
    }
})


invoiceRouter.delete("/supplier/delete/:id", async (req, res) => {
    let id = req.params.id
    try {
        await SupplierModel.findOneAndDelete({ _id: id })
        res.send({ "msg": "Suppplier has been deleted" })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot delete", "error": err.message })
    }
})



module.exports = {
    invoiceRouter
}