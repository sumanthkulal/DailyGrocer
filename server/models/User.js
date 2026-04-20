import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name:{type: String ,requred: true},
    email:{ type: String , requred: true , unique: true},
    password :{ type: String , requred : true },
    cartItems : {type: Object , default : {}},
}, {minimize: false})

const User = mongoose.model.user || mongoose.model('user',userSchema)

export default User