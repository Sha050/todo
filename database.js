const mongoose = require('mongoose');
var db=async()=>{
    await mongoose.connect ("mongodb+srv://sha050:shakthi050@first.v7omroo.mongodb.net/?retryWrites=true&w=majority").then(()=>{console.log("yesssss")}).catch((err)=>{console.log(err)});
    console.log("work");
}

db();

const logn=new mongoose.Schema({
    username:String,
    password:String
});

const todo=new mongoose.Schema({
    username:String,
    todolist:mongoose.Schema.Types.Mixed
})

const log_var=new mongoose.model("fir",logn)
const todo_var=new mongoose.model("sec",todo)

module.exports={log_var,todo_var};