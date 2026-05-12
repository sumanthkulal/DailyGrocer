import Address from "../models/Address.js";

// add adress
export const addAddress = async(req,res) =>{
    try{
            const userId = req.userId;
            const {address} = req.body;
            await Address.create({...address,userId});
            res.json({success:true , message: "Address Added succesfully"});

    }catch(error)
    {
        console.log(error.message);
        res.json({success: false ,message:error.message})
    }
}

//get adress
export const getAddress = async(req,res) => {
    try{
            const userId = req.userId;
            const addresses = await Address.find({userId});
            res.json({success:true , addresses});

    }catch(error)
    {
        console.log(error.message);
        res.json({sucess: false ,message:error.message})
    }
}