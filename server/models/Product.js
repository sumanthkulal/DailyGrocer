import mongoose from "mongoose";

const productSchema =new mongoose.Schema({
    name:{type: String ,requred: true},
    description :{ type: Array , requred: true},
    price :{ type: Number , requred : true },
    offerPrice :{ type: Number , requred : true },
    image :{ type: Array , requred : true },
    category : {type : String , required : true},
    inStock : {type: Boolean , default : true},
}, {timestamps:true})

const Product = mongoose.model.product  || mongoose.model('product',productSchema)

export default Product