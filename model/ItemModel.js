const mongoose=require('mongoose')


const ItemSchema=mongoose.Schema({
    ItemName:{ required: true, type:String },
    SellingPrice:{ required: true, type:Number },
    PurchasePrice:{ required: true, type:Number },
    Units:{ required: false, type:String },
    OpeningStock:{ required: true, type:Number },
    LowStock:{ required: false, type:Number },
    HSNCode:{ required: false, type:String },
    GST:{ required: false, type:String },
    Description:{ required: false, type:String },
},{
    versionKey:false
})


const ItemModel=mongoose.model("item",ItemSchema)

module.exports={
    ItemModel
}
