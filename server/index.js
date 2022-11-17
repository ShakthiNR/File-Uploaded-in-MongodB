 //Imports 
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
var bodyParser = require('body-parser');
const dbUrl = process.env.MONGODB_URL
const PORT = process.env.PORT


//Middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))



//db Connection
mongoose.connect(dbUrl,{useNewUrlParser: true})
.then(()=>console.log(`Database is also connected successfully .... :) `))
.catch((err)=>console.log(`ERROR OCCURRED IN DB CONNECTION ${err}`))





//Router - 1
const userUploadRouter = require("./Router/userdetails")
app.use("/api",userUploadRouter)




//RunServer in Port
app.listen(PORT || 3002,()=>{
    console.log(`Server is Connected in ${PORT} Port... :)`)
}).on('error',(e)=>{
    console.log(`ERROR OCCURED!!!! ${e.message}`);
}) 






