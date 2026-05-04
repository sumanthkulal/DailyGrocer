// place order cod

export const placeOrderCod = async =>{
    try{
        const {userId,items,address} = req.body;
        if(!address || items.length === 0 ){
            return res.json({success:false , message: "invalid data"});
        }
        let amount =await items.reduce(async (acc,item) =>{
            const product = await Product.findById(item.product);
            return (await acc ) + product.offerPrice* item.quantiy;

        },0)

        amount+= Math.floor(amount * 0.02);

        await Order.create(
            {
                userId,
                items,
                amount,
                address,
                paymentType: "COD"
            }
        );

        return res.json({success:true , message: "Order Placed Succesfully"})
    }catch(error)
    {
         console.log(error.message);
        res.json({sucess: false ,message:error.message})
    }
} 

//get order by user id

export const getUsersOrders = async (req,res) =>{
    try{
        const {userId} = req.body;
        const orders = await Order.fin({
            userId,
            $or: [{paymentType: "COD",},{isPaid: true}]
        }).populate("items.product address").sort({createdAt: -1})
        return res.json({success:true , orders})
    }
    catch(error)
    {
         console.log(error.message);
        res.json({sucess: false ,message:error.message})
    }
    
}