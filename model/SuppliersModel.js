const mongoose = require(`mongoose`)


const SupplierSchema = mongoose.Schema({
    PartyName: { require: true, type:String },
    PhoneNo: { require: true,type: Number },
    Address: { require: true, type:String },
    GSTIN: { require: false, type:String }
},{
    versionKey:false
})




const SupplierModel = mongoose.model("supplier", SupplierSchema)

module.exports = {
    SupplierModel
}