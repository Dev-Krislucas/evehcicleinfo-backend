const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config({path:"./config.env"});
//Essential Middle wares 
app.use(express.json());
app.use(morgan('dev'));
// app.use((req,res,next)=>{
//     console.log(`${9+2}`);
//     next();
// }) 

//Connect to Datbase
mongoose.connect(process.env.DB,{useNewUrlParser:true}).then(()=>{console.log('COnnected to database')}).catch((err)=>{console.log(err)});

//Importing routes
const vehicleRouter = require('./routes/vehicleRoutes');
const userRouter = require('./routes/userRoutes');

app.use("/admin",vehicleRouter);
app.use('/user',userRouter);

// app.listen()
app.listen(process.env.PORT,()=>{
    console.log(`Connected to port :${process.env.PORT}`)
})