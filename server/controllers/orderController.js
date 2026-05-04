// place order cod

export const placeOrderCod = async (req, res) => { 
    try {
        const { userId, items, address } = req.body;
        let amount = 0;

        // This replaces that complicated (await acc) logic
        for (const item of items) {
            const product = await Product.findById(item.product);
            amount += product.offerPrice * item.quantity; 
        }

        amount += Math.floor(amount * 0.02);

        await Order.create({ userId, items, amount, address, paymentType: "COD" });

        res.json({ success: true, message: "Order Placed Successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

//get order by user id

export const getUsersOrders = async (req,res) =>{
    try{
        const {userId} = req.body;
        const orders = await Order.find({
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

export const getAllOrders = async (req,res) =>{
    try{
        const orders = await Order.find({
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