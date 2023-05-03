const mongoose = require('mongoose')
const express = require('express')
const { CustomerModel } = require('../model/CustomerModel')
const { SupplierModel } = require('../model/SuppliersModel')
const { ItemModel } = require('../model/ItemModel')





const invoiceRouter = express.Router()



invoiceRouter.get('/', (req, res) => {
    res.send('hi guys')
})

// here we can add new customer........

invoiceRouter.post("/customer/add", async (req, res) => {
    let data = req.body
    try {
        let newData = new CustomerModel(data)
        await newData.save()
        res.send({ "msg": "Customer added to the list successfully " })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot add", "error": err.message })
    }
})

// here we can remove any specific customer........

invoiceRouter.delete("/customer/delete/:id", async (req, res) => {
    let id = req.params.id
    try {
        await CustomerModel.findOneAndDelete({ _id: id })
        res.send({ "msg": "Customer has been deleted successfully " })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot delete", "error": err.message })
    }
})


invoiceRouter.get("/customer",async(req,res)=>{
    
    try{
     let data=await CustomerModel.find()
     res.send(data)
    }catch(err){
res.send(err)
    }
})


// here we can add new supplier........

invoiceRouter.get("/supplier",async(req,res)=>{
    
    try{
     let data=await SupplierModel.find()
     res.send(data)
    }catch(err){
res.send(err)
    }
})


invoiceRouter.post("/supplier/add", async (req, res) => {
    let data = req.body
    try {
        let newData = new SupplierModel(data)
        await newData.save()
        res.send({ "msg": "Supplier added to the list successfully " })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot add", "error": err.message })
    }
})

// here we can remove any specific supplier........

invoiceRouter.delete("/supplier/delete/:id", async (req, res) => {
    let id = req.params.id
    try {
        await SupplierModel.findOneAndDelete({ _id: id })
        res.send({ "msg": "Suppplier has been deleted successfully " })
    } catch (err) {
        res.send({ "msg": "somthing went wrong! cannot delete", "error": err.message })
    }
})

// here we can add new item........

invoiceRouter.get("/item",async(req,res)=>{
    try{
        let data=await ItemModel.find()
        res.send(data)
       }catch(err){
   res.send(err)
       }  
})


invoiceRouter.post("/items/add",async(req,res)=>{
    let data=req.body
    console.log(data)
    try{
        let newData=new ItemModel(data)
        await newData.save()
        res.send({ "msg": "Item added to the list successfully " })
    }catch(err){
        res.send({ "msg": "somthing went wrong! cannot add", "error": err.message })
    }
})

module.exports = {
    invoiceRouter
}

