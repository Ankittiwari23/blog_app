// add all packages 
const express=require('express')
const cors=require('cors')
const morgan = require('morgan')
const colors = require('colors')
const dotenv=require('dotenv')
const connectDB = require('./config/db')
//env config
dotenv.config();

//router import
const userRoutes=require('./routes/userRoutes');
const blogRoutes=require('./routes/blogRoutes');
//mongodb Connection
connectDB();

// rest object
const app=express();

//middewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/blog',blogRoutes);
//request le sakte aur response de sakte

const PORT=process.env.PORT || 8083
app.listen(PORT, ()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white);
});