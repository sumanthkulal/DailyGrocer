import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userId : {type: String ,required: true , ref: 'user' },
        items :
        [
            {
                product:  {type: String ,requred: true , ref: 'product'},
                quantity: {type:Number, requred:true}
            }
        ],
        amount : { type:Number, requred:true},
        address :  {type: String ,requred: true , ref: 'address'},
        status  :  {type: String , default:'Order Placed'},
        paymentType :  {type: String ,requred: true},
        isPaid  :  {type: Boolean , default:false},
    },{timestamps: true}
)

const Order = mongoose.models.order || mongoose.model('order',orderSchema);

export default Order;

