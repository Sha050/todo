const express = require('express');

const db = require('./database.js');
const app = express();
require('./fetch.js');
const name = "";

app.use(express.json(),express.urlencoded({extended:false})); 

app.set("view engine","ejs");

app.listen(3000,()=>{
    console.log('up n runnin');
})

app.get('/',(req,res)=>{
    res.render(__dirname+'/index.ejs');
})

app.get('/login',(req,res)=>{
    res.render(__dirname+'/pages/reg.ejs'); 
})

app.post('/logme',(req,res)=>{
    const data = req.body;
    name=req.body.user;
    db.log_var.insertMany({username:data.user,password:data.pass});
    res.send('done');
})

app.get('/find',(req,res)=>{
    res.render(__dirname+'/pages/store.ejs');
})

app.post('/details',(req,res)=>{
    const data = req.body;
    db.log_var.findOne({username:data.user}).then((doc)=>{
        res.send(doc.password);
    })
})

app.post('/savetodo',(req,res)=>{
    const data=req.body;
    db.todo_var.findOne({username:name}).then((doc)=>{
        if(doc){
            db.todo_var.updateMany({username:name,todolist:data.list});
        }
        else{
            db.todo_var.insertMany({username:"name",todolist:data.list});
        }
        res.json({status:"success"}); 
    })
})

app.delete('/deletetodo',(req,res)=>{
    db.todo_var.UpdateOne({username:name})
})

