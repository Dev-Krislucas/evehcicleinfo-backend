const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
name:{

    type:String,
    required:[true,"please enter a name"]
},
price:{
    type:Number,
    required:[1,"please enter a price"]
},
range:{
    type:Number,
    required:[1,"please enter a range"]

},
vehicleType:{
    type:String,
    enum:["scooter","bike","car"]
},
chargingTime:{
    type:Number,
    required:[1,"please enter time required for charging"]
},
imgSrc:{
    type:String
}
});

const Vehicle = mongoose.model("Vehicle",VehicleSchema);
module.exports = Vehicle;