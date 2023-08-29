require("dotenv").config();
const express=require("express");
const app=express();
const port=+process.env.PORT || "8000"
const {mongoose}  = require("mongoose");
const indexRouter=require("./routes");

mongoose.connect(process.env.DB_URL).then(()=>{
    
    console.log("Database connectd connected");
})
app.use(express.json());
app.use("/", indexRouter);

app.use((err,req,res,next)=>{
    err=err?err.toString():"something is wrong";
    res.status(500).json({data:"",msg:err});
});

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
});