const userModel = require("../models/userModel");
const inventoryModel = require("../models/inventoryModel");
const createInventoryController = async (req, res) => {

    try{
        const {email,inventoryType} = req.body
     
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:"User Not Found",
                inventory
            })
        }
        if(inventoryType === 'in' && user.role !=='doner'){
            return res.status(404).send({
                success:"not a doner account",
                inventory
            })
        }
        if(inventoryType =='out' && user.role !=='hospital' ){
            return res.status(404).send({
                success:"not a hospital account",
                inventory
            })
        }

        const inventory = new inventoryModel(req.body)
        await inventory.save()
        return res.status(201).send({
            success:"New Record Added",
            inventory
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).send({
          success: false,
          message: "Error In Hospital ORG API",
          error,
        });
    }



}

const getInventoryController = async (req, res) => {

    try{

    const inventory = await userModel.findOne({organisation: req.body.userId})
    .populate('doner').populate('hospital').sort({createdAt: -1 })
       return res.status(200).send({
        success: true,
        messaage: "get all records successfully",
        inventory,
       })
    }
    catch(error){
        console.log(error);
        return res.status(500).send({
          success: false,
          message: "Error In Get All Inventory API",
          error,
        });
    }


}

module.exports = {
    createInventoryController,
    getInventoryController
    // getDonarsController,
    // getHospitalController,
    // getOrgnaisationController,
    // getOrgnaisationForHospitalController,
    // getInventoryHospitalController,
    // getRecentInventoryController,
  };