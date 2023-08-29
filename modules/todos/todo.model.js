

const {Schema, model}=require("mongoose");

const TodoSchema= new Schema({
    title:{type:String,required:true},
    status:{type:String,enum:["pending","completed"],default:"pending"},
    created_at:{type:Date, default:Date.now()},

});
module.exports=model("Todo",TodoSchema)
