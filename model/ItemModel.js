const mongoose=require('mongoose')


const ItemSchema=mongoose.Schema({
    ItemName:String,
    SellingPrice:Number,
    PurchasePrice:Number,
    Units:String,
    OpeningStock:Number,
    LowStock:Number,
    HSNCode:String,
    GST:String,
    Description:String
},{
    versionKey:false
})


const ItemModel=mongoose.model("item",ItemSchema)

module.exports={
    ItemModel
}
