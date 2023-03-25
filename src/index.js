const express = require('express')
const app= express()
require("./config/db")
const cors =require("cors")
const tasks=require('./Routes/task.route')
const sprint=require('./Routes/week.route')
require("dotenv").config();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

app.get('/', (req,res)=> res.send('hello'))
app.use("/task",tasks)
app.use("/sprint",sprint)

app.listen(PORT,()=> {console.log('server started at port 8080')})