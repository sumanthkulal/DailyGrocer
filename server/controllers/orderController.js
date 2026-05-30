import Product from "../models/Product.js"
import Order from "../models/Order.js"
import stripe from "stripe";
import User from "../models/User.js"


// place order cod
export const placeOrderCod = async (req, res) => { 
    try {
        const { userId, items, address } = req.body;
       
        if(!address || items.length == 0)
        {
            return res.json({success:false, message: "Invalid data "});
        }

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

export const placeOrderStripe = async (req, res) => { 
    try {
        const { userId, items, address } = req.body;
        const {origin} = req.headers;

        if(!address || items.length == 0)
        {
            return res.json({success:false, message: "Invalid data "});
        }

        let amount = 0;
        let productData = [];
        // This replaces that complicated (await acc) logic
        for (const item of items) {
            const product = await Product.findById(item.product);

            productData.push({
                name: product.name,
                price: product.offerPrice,
                quantity: item.quantity
            })
            amount += product.offerPrice * item.quantity; 
        }

        amount += Math.floor(amount * 0.02);

        const order = await Order.create({ userId, items, amount, address, paymentType: "Online" });

        const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);

        const line_items = productData.map((item)=>{
            return {
                price_data : {
                    currency : "usd",
                    product_data : {
                        name : item.name
                    },
                    unit_amount: Math.round(item.price * 1.02 * 100),
                    },
                    quantity: item.quantity 
            }
        }) 

        const session = await stripeInstance.checkout.sessions.create(
            {
                line_items,
                mode: "payment",
                success_url: `${origin}/loader/?next=my-orders`,
                cancel_url: `${origin}/cart`,
                metadata: {
                    orderId: order._id.toString(),
                    userId,
                }

            }
        )


        res.json({ success: true, url: session.url  });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}



export const stripeWebHooks = async (request,response) =>{
     const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);
    
     const sig = request.headers["stripe-signature"];
     let event;
    
     try{
            event = stripeInstance.webhooks.constructEvent(
                request.body,
                sig,
                process.env.STRIPE_WEBHOOK_SECRET
            )
     }catch(error){
            response.status(400).send(`Webhook error: ${error.message}`)
     }

     switch(event.type)
     {
        case "payment_intent.succeeded" : {
            const paymentIntent = event.data.object;
            const paymentIntentId = paymentIntent.id;

            const session = await stripeInstance.checkout.sessions.list({
                payment_intent :paymentIntentId
            })

            const {orderId,userId} = session.data[0].metadata;
            await Order.findByIdAndUpdate(orderId,{isPaid:true})
            await Order.findByIdAndUpdate(orderId, {cartItems: {}})
            break;
        }

        case "payment_intent.failed" : {
            const paymentIntent = event.data.object;
            const paymentIntentId = paymentIntent.id;

            const session = await stripeInstance.checkout.sessions.list({
                payment_intent :paymentIntentId
            })

            const {orderId} = session.data[0].metadata;
            await Order.findByIdAndDelete(orderId);
            break;
        }


        default: 
            console.error(`Unhandled event type ${event.type}`)
        break;

        response.json({received: true}) 
     }
    }


//get order by user id
export const getUsersOrders = async (req,res) =>{
    try{
        const userId = req.userId;
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