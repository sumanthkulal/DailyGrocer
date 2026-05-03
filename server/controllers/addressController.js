import Address from "../models/Address.js";

// add adress
export const addAddress = async(req,res) =>{
    try{
            const {address,userId} = req.body;
            await Address.create({...address,userId});
            res.json({sucess:true , messsage: "Address Added succesfully"});

    }catch(error)
    {
        console.log(error.message);
        res.json({sucess: false ,message:error.message})
    }
}

//get adress
export const getAddress = async(req,res) => {
    try{
            const {userId} = req.body;
            const addresses = await Address.find({userId});
            res.json({sucess:true , addresses});

    }catch(error)
    {
        console.log(error.message);
        res.json({sucess: false ,message:error.message})
    }
}