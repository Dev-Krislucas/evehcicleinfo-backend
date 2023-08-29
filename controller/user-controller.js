const Vehicle = require('../models/vehicleModel');

exports.getSpecificVehicle = async(req,res)=>{
    let _id = req.params.id;
    const foundVehicle = await Vehicle.findById({_id});

    res.status(200).json({
        message:"Vehicle Found",
        foundVehicle
    })
}