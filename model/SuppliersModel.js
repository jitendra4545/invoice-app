const mongoose = require(`mongoose`)


const SupplierSchema = mongoose.Schema({
    PartyName: { required: true, type:String },
    PhoneNo: { required: true,type: Number },
    Address: { required: true, type:String },
    GSTIN: { required: false, type:String }
},{
    versionKey:false
})




const SupplierModel = mongoose.model("supplier", SupplierSchema)

module.exports = {
    SupplierModel
}