const mongoose = require(`mongoose`)


const CustomerSchema = mongoose.Schema({
    PartyName: { require: true, type:String },
    PhoneNo: { require: true,type: Number },
    Address: { require: true, type:String },
    GSTIN: { require: false, type:String }
},{
    versionKey:false
})



const CustomerModel = mongoose.model("customer", CustomerSchema)

module.exports = {
    CustomerModel
}