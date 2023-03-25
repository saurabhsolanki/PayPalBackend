const mongoose=require("mongoose")
mongoose.set('strictQuery', false);

require("dotenv").config();
const mongo_url = process.env.mongo_url || "";

mongoose.connect("mongodb+srv://mock:mock@cluster0.bvmggaj.mongodb.net/paypal",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((res)=>{
    console.log("db connected")
}).catch((e)=>{
    console.log(e)
})