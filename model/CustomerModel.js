const mongoose = require(`mongoose`)


const CustomerSchema = mongoose.Schema({
    PartyName: { required: true, type:String },
    PhoneNo: { required: true,type: Number },
    Address: { required: true, type:String },
    GSTIN: { required: false, type:String },
    

},
{ timestamps: true }
)



const CustomerModel = mongoose.model("customer", CustomerSchema)

module.exports = {
    CustomerModel
}