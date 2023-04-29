const mongoose = require(`mongoose`)


const SupplierSchema = mongoose.Schema({
    PartyName: { require: true, String },
    PhoneNo: { require: true, Number },
    Address: { require: true, String },
    GSTIN: { require: false, String }
})



const SupplierModel = mongoose.model("supplier", SupplierSchema)

module.exports = {
    SupplierModel
}