const mongoose = require(`mongoose`)


const CustomerSchema = mongoose.Schema({
    PartyName: { require: true, String },
    PhoneNo: { require: true, Number },
    Address: { require: true, String },
    GSTIN: { require: false, String }
})



const CustomerModel = mongoose.model("customer", CustomerSchema)

module.exports = {
    CustomerModel
}