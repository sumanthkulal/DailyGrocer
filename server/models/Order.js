import mongoose from mongoose;

const orderSchema = new mongoose.Schema(
    {
        userId : {type: String ,required: true , ref: 'user' },
        items :
        [
            {
                product:  {type: String ,requred: true , ref: 'product'},
                quantity: {type:number, requred:true}
            }
        ],
        amount : {type:number, requred:true},
        address :  {type: String ,requred: true , ref: 'address'},
        status  :  {type: String , default:'Order Placed'},
        paymentType :  {type: String ,requred: true},
        isPaid  :  {type: Boolean , default:false},
    },{timeStamps: true}
)

const Order = mongoose.models.order || mongoose.models('order',orderSchema);

export default Order;

