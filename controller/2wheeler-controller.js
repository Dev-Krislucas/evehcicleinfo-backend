const Vehicle = require('../models/vehicleModel');

exports.getVehicles = async(req,res)=>{
    let vehicles = await Vehicle.find();
    res.status(200).json({
        message:"Vehicles",
        vehicles
        
    })

}


exports.createTwoWheeler = async(req,res)=>{
    let newVehicle = await Vehicle.create(req.body);


    res.status(200).json({
        message:"Vehicle Created",
        newVehicle
    })
    
}
exports.updateVehicle = async(req,res)=>{
    const _id = req.params.id;
    const updatedVehicle = await Vehicle.findOneAndUpdate({_id},req.body,{
        new:true
    })
    res.status(200).json({
        message:"Vehicle Updated",
        updatedVehicle
    })

}

exports.deleteVehicle = async(req,res)=>{
    const _id = req.params.id;
    await Vehicle.findByIdAndDelete({_id});

    res.status(200).json({
        message:"Vehicle Deleted"
    })
}